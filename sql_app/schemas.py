from typing import Union
from pydantic import BaseModel
from datetime import datetime
from typing import List, Union, Dict, Any

class KeysBase(BaseModel):
    envvar: str
    envval: str
    created_at: datetime
    updated_at: datetime
