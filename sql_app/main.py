from fastapi import Depends, FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi import Request
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
import os

from . import crud, models, schemas, utils
from .database import SessionLocal, engine
from .logger import setup_logger
from .noco_config import OPENAPI_URL
from .middleware import add_middleware, limiter

models.Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Initialize FastAPI App
desc = "Backend platform for benmyers.org"

logger = setup_logger()

if OPENAPI_URL == "None":
    OPENAPI_URL = None

app = FastAPI(
    title="Ben Myers API",
    description=desc,
    openapi_url=OPENAPI_URL
)

script_path = os.path.abspath(__file__)
script_dir = os.path.dirname(script_path)

static_dir = os.path.join(script_dir, "static")
templates_dir = os.path.join(script_dir, "templates")

app.mount("/static", StaticFiles(directory=static_dir), name="static")
templates = Jinja2Templates(directory=templates_dir)

@app.exception_handler(StarletteHTTPException)
@limiter.limit("100/minute")
def custom_http_exception_handler(request: Request, exc: StarletteHTTPException):
    return templates.TemplateResponse("error_500.html", {"request": request}, status_code=exc.status_code)

@app.exception_handler(RequestValidationError)
@limiter.limit("100/minute")
def validation_exception_handler(request: Request, exc: RequestValidationError):
    return templates.TemplateResponse("error_500.html", {"request": request}, status_code=400)

@app.exception_handler(Exception)
@limiter.limit("100/minute")
def global_exception_handler(request: Request, exc: Exception):
    return templates.TemplateResponse("error_500.html", {"request": request}, status_code=500)

@app.get("/", response_class=HTMLResponse)
@limiter.limit("100/minute")
def homepage(request: Request):
    try:
        context = {
            "version": utils.get_version(),
        }
        return templates.TemplateResponse(request=request, name="index.html", context=context)
    except Exception as e:
        print(f"Error in Homepage: {e}")
        raise HTTPException(status_code=500, detail=f"Error in Homepage: {e}")