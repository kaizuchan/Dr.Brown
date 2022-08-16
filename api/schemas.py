from datetime import date
from typing import Union
import uuid  
from pydantic import BaseModel


class UserSchemaIn(BaseModel):
    uuid: int
    birthday: date
    sex: str

class UserSchema(BaseModel):
    id: int
    uuid: int
    birthday: date
    sex: str