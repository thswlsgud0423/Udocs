from typing import List
from pydantic import BaseModel
from fastapi_backend.core.schemas.items import Item


class UserBase(BaseModel):
    first_name: str
    last_name: str
    username: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    items: List[Item] = []

    class Config:
        from_attributes = True
