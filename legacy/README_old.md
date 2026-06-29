# Ben Myers Personal Website
Website to display Full Stack capabilities with Tailwind CSS, Fast API, and Jinja2 

## User Stories
- A user wants to look at my projects or contact me

## Current Features
- Jinja2 templating for base, footer, and navbar templates

## Features(Coming Soon)
- Secure contact form

## Requiremnts:
- Git
- Python virtual enviornment
- PostgreSQL

## .env file secrets

1. **Make sure the .env file is in the root directory. You need the secrets to be filled out. Find the necessary enviornment varibles in the src/artecommercellcapi/config.py**

## How to Set Up Local Environment

1. **Clone the repository**

   ```bash
   git clone https://github.com/myersben9/benmyers.git
   ```

2. **Open terminal and navigate to the root directory of the repo**

   ```bash
   cd benmyers
   ```

3. **Download a python virtual enviornment by running**

   ```bash
   python -m venv .venv
   ```

4. **(Mac OS/Linux) Activate the virtual enviornmnet with**
   ```bash
   source .venv/bin/activate
   ```
   **(Windows 11/10)**
   ```bash
   .venv/scripts/activate
   ```
5. **While in the root directory, make sure (.venv) pops up to the left, bottomost line of text in the terminal. Then run**

   ```bash
   pip install -r requirements.txt
   ```

6. **Now that dependencies are downloaded and you are in the root directory. Run**
   ```
   uvicorn sql_app.app:app --reload
   ```