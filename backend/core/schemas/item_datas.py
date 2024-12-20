from pydantic import BaseModel
from datetime import date
from typing import Optional


class ItemDataBase(BaseModel):
    price: int
    dateAdded: date

class ItemDataCreate(ItemDataBase):
    pass


class ItemData(ItemDataBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True