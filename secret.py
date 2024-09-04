import secrets

# Generate a secure random secret key
SECRET_KEY = secrets.token_hex(32)  # 256 bits
print(SECRET_KEY)