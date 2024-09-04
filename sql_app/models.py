# app/models.py
from pydantic import BaseModel
from typing import List, Union, Dict, Any
from dataclasses import dataclass
from sqlalchemy import Column, Integer, String, DateTime, JSON, Boolean
from sqlalchemy.sql import func
from datetime import datetime, timezone
from dataclasses import dataclass
from typing import List, Dict, Any, Union
import bcrypt
from .database import Base

class Keys(Base):
    __tablename__ = "nc_3eh7___keys"

    id = Column(Integer, primary_key=True)
    envvar = Column(String)
    envval = Column(String)
    created_at = Column(DateTime, default=datetime)
    updated_at = Column(DateTime, default=datetime, onupdate=datetime)

class User(Base):
    __tablename__ = "nc_7jy6___users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    email = Column(String, unique=True, index=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=datetime.now(timezone.utc), onupdate=datetime.now(timezone.utc))

    def verify_password(self, password: str):
        return bcrypt.checkpw(password.encode('utf-8'), self.hashed_password.encode('utf-8'))
    
    @classmethod
    def hash_password(cls, password: str):
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

@dataclass()
class KeyLists:
    envvars: List[str]
    envvals: List[str]

@dataclass
class TableMap:
    key_table: str


