from typing import List
from pydantic import BaseModel
from fastapi_backend.core.schemas.item_datas import ItemData
from typing import Optional


class ItemBase(BaseModel):
    name: str
    link: str
    price_change: str


class ItemCreate(ItemBase):
    pass


class ItemUpdate(ItemBase):
    name: Optional[str] = None
    link: Optional[str] = None


class Item(ItemBase):
    id: int
    owner_id: int
    itemData: List[ItemData] = []

    class Config:
        from_attributes = True
