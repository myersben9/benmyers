# app/models.py
from pydantic import BaseModel
from typing import List, Union, Dict, Any
from dataclasses import dataclass
from sqlalchemy import Column, Integer, String, DateTime, JSON
from sqlalchemy.sql import func
from datetime import datetime
from dataclasses import dataclass
from typing import List, Dict, Any, Union

from .database import Base

class Keys(Base):
    __tablename__ = "nc_3eh7___keys"

    id = Column(Integer, primary_key=True)
    envvar = Column(String)
    envval = Column(String)
    created_at = Column(DateTime, default=datetime)
    updated_at = Column(DateTime, default=datetime, onupdate=datetime)

@dataclass()
class KeyLists:
    envvars: List[str]
    envvals: List[str]

@dataclass
class TableMap:
    key_table: str


