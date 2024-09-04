# main.py
from fastapi import Depends, FastAPI, HTTPException, File, UploadFile, Request, Form
from fastapi.responses import RedirectResponse, Response
from sqlalchemy.orm import Session
from PIL import Image
import io
from fastapi.responses import HTMLResponse, FileResponse, StreamingResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
import os
from datetime import timedelta
from fastapi import status
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import EmailStr

from . import auth
from .database import engine
from . import crud, models, schemas, utils
from .dependency import get_db
from .auth import get_current_user
from .logger import setup_logger
from .noco_config import OPENAPI_URL
from .middleware import add_middleware, limiter

models.Base.metadata.create_all(bind=engine)

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

add_middleware(app)

script_path = os.path.abspath(__file__)
script_dir = os.path.dirname(script_path)

static_dir = os.path.join(script_dir, "static")
resume_file_path = os.path.join(static_dir, "resume_BenMyers.pdf")
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

@app.get("/resume/download", response_class=FileResponse, name="download_resume")
@limiter.limit("100/minute")
def download_resume(request: Request):
    logger.info("Resume download requested")
    try:
        return FileResponse(path=resume_file_path, filename="resume_BenMyers.pdf", media_type="application/pdf")
    except Exception as e:
        logger.error(f"Error during resume download: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.get("/resume/stream", response_class=StreamingResponse, name="stream_resume")
@limiter.limit("100/minute")
def stream_resume(request: Request):
    logger.info("Resume stream requested")
    try:
        def iterfile():
            with open(resume_file_path, mode="rb") as file_like:
                yield from file_like

        return StreamingResponse(iterfile(), media_type="application/pdf")
    except Exception as e:
        logger.error(f"Error during resume streaming: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.get("/upload", response_class=HTMLResponse, name="upload")
@limiter.limit("100/minute")
def get_upload_page(request: Request, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    """
    Serve the upload page template where users can upload images.
    """
    try:
        context = {
            "version": utils.get_version(), # Assuming you have a version utility,
            "current_user": current_user
        }
        return templates.TemplateResponse(request=request, name="upload.html", context=context)
    except Exception as e:
        logger.error(f"Error serving the upload page: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.post("/upload-image/")
@limiter.limit("100/minute")
def upload_image(request: Request, file: UploadFile = File(...), db: Session = Depends(get_db)):
    try:
        # Read the file content
        contents = file.file.read()
        image = Image.open(io.BytesIO(contents))

        # Calculate the maximum size in inches at 300 DPI
        dpi = 300
        width, height = image.size
        width_in_inches = width / dpi
        height_in_inches = height / dpi

        # Save the file locally if needed
        save_path = os.path.join(static_dir, file.filename)
        with open(save_path, "wb") as f:
            f.write(contents)

        return {
            "filename": file.filename,
            "width_inches": width_in_inches,
            "height_inches": height_in_inches
        }

    except Exception as e:
        logger.error(f"Error during image upload: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@app.get("/register", response_class=HTMLResponse)
def get_register_page(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.get("/login", response_class=HTMLResponse, name="login")
def get_login_page(request: Request):
    access_token = request.cookies.get("access_token")
    if access_token:
        return RedirectResponse(url="/user_dashboard", status_code=303)
    return templates.TemplateResponse("login.html", {"request": request})

@app.post("/register", response_class=HTMLResponse)
async def register_user(
    request: Request,
    username: str = Form(...),
    email: EmailStr = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    try:
        db_user = crud.get_user_by_email(db, email=email)
        if db_user:
            return templates.TemplateResponse("register.html", {"request": request, "error": "Email already registered"})
        
        hashed_password = auth.get_password_hash(password)
        db_user = models.User(
            username=username,
            email=email,
            hashed_password=hashed_password,
        )
        
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        
        return RedirectResponse(url="/login", status_code=303)
    except Exception as e:
        logger.error(f"Error during user registration: {e}")
        return templates.TemplateResponse("register.html", {"request": request, "error": "Internal server error"})
@app.post("/token", response_class=HTMLResponse)
async def login_for_access_token(
    request: Request,
    response: Response,
    db: Session = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
):
    try:
        user = auth.authenticate_user(db, form_data.username, form_data.password)
        if not user:
            return templates.TemplateResponse("login.html", {"request": request, "error": "Incorrect username or password"})
        
        access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = auth.create_access_token(
            data={"sub": user.username}, expires_delta=access_token_expires
        )
        # Set the access token in a cookie
        response = RedirectResponse(url="/user_dashboard", status_code=303)
        response.set_cookie(key="access_token", value=access_token, httponly=True, max_age=auth.ACCESS_TOKEN_EXPIRE_MINUTES * 60, expires=auth.ACCESS_TOKEN_EXPIRE_MINUTES * 60, secure=True)
        return response
    except Exception as e:
        logger.error(f"Error during login: {e}")
        return templates.TemplateResponse("login.html", {"request": request, "error": "Internal server error"})

@app.get("/user_dashboard", response_class=HTMLResponse, name="user_dashboard")
def upload_portal(request: Request, current_user: models.User = Depends(get_current_user)):
    if not current_user:
        # Delete the access token cookie if the user is not logged in
        print("User not logged in")
        print(request.cookies.get("access_token"))
        return RedirectResponse(url="/login", status_code=303)
    context = {
        "request": request,
        "current_user": current_user,
        "version": utils.get_version()
    }
    return templates.TemplateResponse("user_dashboard.html", context=context)

@app.get("/user_upload", response_class=HTMLResponse, name="user_upload")
def user_settings(request: Request, current_user: models.User = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    context = {
        "request": request,
        "current_user": current_user,
        "version": utils.get_version()
    }
    return templates.TemplateResponse("user_upload.html", context=context)
@app.get("/user_settings", response_class=HTMLResponse, name="user_settings")
def user_settings(request: Request, current_user: models.User = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    context = {
        "request": request,
        "current_user": current_user,
        "version": utils.get_version()
    }
    return templates.TemplateResponse("user_settings.html", context=context)

@app.get("/user_profile", response_class=HTMLResponse, name="user_profile")
def user_profile(request: Request, current_user: models.User = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    context = {
        "request": request,
        "current_user": current_user,
        "version": utils.get_version()
    }
    return templates.TemplateResponse("user_profile.html", context=context)


@app.get("/logout", response_class=RedirectResponse, name="logout")
def logout(response: Response):
    response = RedirectResponse(url="/", status_code=303)
    response.delete_cookie(key="access_token")
    return response

@app.get("/users/me/", response_model=schemas.User)
def read_users_me(current_user: models.User = Depends(get_current_user)):
    return current_user

@app.post("/update_profile", response_class=HTMLResponse)
def update_profile(
    request: Request,
    username: str = Form(...),
    email: EmailStr = Form(...),
    password: str = Form(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    if not current_user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    try:
        db_user = db.query(models.User).filter(models.User.username == current_user.username).first()
        if db_user is None:
            raise HTTPException(status_code=404, detail="User not found")
        
        db_user.username = username
        db_user.email = email
        if password:  # Update password only if provided
            db_user.hashed_password = auth.get_password_hash(password)
        
        db.commit()
        db.refresh(db_user)

        return templates.TemplateResponse("user_profile.html", {"request": request, "current_user": db_user, "success": "Profile updated successfully"})
    except Exception as e:
        logger.error(f"Error during user profile update: {e}")
        return templates.TemplateResponse("user_profile.html", {"request": request, "current_user": db_user, "error": "Internal server error"})
    
@app.get("/collage_preview", response_class=HTMLResponse, name="collage_preview")
def collage_preview(request: Request, current_user: models.User = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(status_code=401, detail="Unauthorized")
    context = {
        "request": request,
        "current_user": current_user,
        "version": utils.get_version()
    }
    return templates.TemplateResponse("collage_preview.html", context=context)