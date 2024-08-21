from fastapi import Depends, FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi import Request
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
import os
from fastapi.responses import FileResponse

from . import crud, models, schemas, utils
from .database import SessionLocal, engine
from .logger import setup_logger
from .noco_config import OPENAPI_URL
from .middleware import add_middleware, limiter

models.Base.metadata.create_all(bind=engine)

# Dependency
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

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

@app.get("/", response_class=HTMLResponse, name="home")
@limiter.limit("100/minute")
def home(request: Request):
    logger.info(f"Homepage accessed by: {request.client.host}")
    try:
        context = {
            "version": utils.get_version()
        }
        return templates.TemplateResponse(request=request, name="index.html", context=context)
    except Exception as e:
        logger.error(f"Error in homepage: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
    
@app.get("/projects", response_class=HTMLResponse, name="projects")
@limiter.limit("100/minute")
def projects(request: Request):
    logger.info(f"Projects page accessed by: {request.client.host}")
    try:
        context = {
            "version": utils.get_version(),
        }
        return templates.TemplateResponse(request=request, name="projects.html", context=context)
    except Exception as e:
        logger.error(f"Error in projects page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
    
@app.get("/contact", response_class=HTMLResponse, name="contact")
@limiter.limit("100/minute")
def contact(request: Request):
    logger.info(f"Contact page accessed by: {request.client.host}")
    try:
        context = {
           "version": utils.get_version()
        }
        return templates.TemplateResponse(request=request, name="contact.html", context=context)
    except Exception as e:
        logger.error(f"Error in contact page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
    
@app.get("/resume", response_class=HTMLResponse, name="resume")
@limiter.limit("100/minute")
def resume(request: Request):
    logger.info(f"Resume page accessed by: {request.client.host}")
    try:
        context = {
            "version": utils.get_version()
        }
        return templates.TemplateResponse(request=request, name="resume.html", context=context)
    except Exception as e:
        logger.error(f"Error in resume page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
    
@app.get("/blog", response_class=HTMLResponse, name="blog")
@limiter.limit("100/minute")
def blog(request: Request):
    logger.info(f"Blog page accessed by: {request.client.host}")
    try:
        context = {
            "version": utils.get_version()
        }
        return templates.TemplateResponse(request=request, name="blog.html", context=context)
    except Exception as e:
        logger.error(f"Error in blog page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
    
@app.get("/about", response_class=HTMLResponse, name="about")
@limiter.limit("100/minute")
def about(request: Request):
    logger.info(f"About page accessed by: {request.client.host}")
    try:
        context = {
            "version": utils.get_version()
        }
        return templates.TemplateResponse(request=request, name="about.html", context=context)
    except Exception as e:
        logger.error(f"Error in about page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@app.get("/terms", response_class=HTMLResponse, name="terms")
@limiter.limit("100/minute")
def terms(request: Request):
    logger.info(f"Terms page accessed by: {request.client.host}")
    try:
        context = {
            "version": utils.get_version()
        }
        return templates.TemplateResponse(request=request, name="terms.html", context=context)
    except Exception as e:
        logger.error(f"Error in terms page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.get("/privacy", response_class=HTMLResponse, name="privacy")
@limiter.limit("100/minute")
def privacy(request: Request):
    logger.info(f"Privacy page accessed by: {request.client.host}")
    try:
        context = {
            "version": utils.get_version()
        }
        return templates.TemplateResponse(request=request, name="privacy.html", context=context)
    except Exception as e:
        logger.error(f"Error in privacy page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
