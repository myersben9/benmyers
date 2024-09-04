from typing import Union, List, Dict, Any
from pydantic import BaseModel, EmailStr
from datetime import datetime

class KeysBase(BaseModel):
    envvar: str
    envval: str
    created_at: datetime
    updated_at: datetime

class UserUpdate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True