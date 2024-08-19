# app/config.py
import dotenv
import os

# Get file path of .env file
dotenv_path = dotenv.find_dotenv()

# Load environment variables from .env file
dotenv.load_dotenv(dotenv_path)

SQLALCHEMY_DATABASE_URL = os.getenv("SQLALCHEMY_DATABASE_URL")

# Set the environment

DEVELOPMENT_ORIGINS = os.getenv("DEVELOPMENT_ORIGINS")
PRODUCTION_ORIGINS = os.getenv("PRODUCTION_ORIGINS")

DEVELOPMENT_HOSTS = os.getenv("DEVELOPMENT_HOSTS")
PRODUCTION_HOSTS = os.getenv("PRODUCTION_HOSTS")
ENVIORNMENT = os.getenv("ENVIORNMENT")

CSP_POLICY = os.getenv("CSP_POLICY")
DEVELOPER_NUMBER = os.getenv("DEVELOPER_NUMBER")
DEVELOPER_EMAIL = os.getenv("DEVELOPER_EMAIL")

NOCODB_XC_TOKEN = os.getenv("NOCODB_XC_TOKEN")
NOCODB_PATH = os.getenv("NOCODB_PATH")
