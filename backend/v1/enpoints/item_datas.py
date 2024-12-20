from typing import List

from fastapi import APIRouter

from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

from fastapi_backend.core import models, schemas, services

router = APIRouter()


@router.post("/items/{items_id}/itemData/", response_model=schemas.item_datas.ItemData)
def create_item_data_for_item(
        items_id: int,
        item_data: schemas.item_datas.ItemData,
        db: Session = Depends(models.database.get_db)):

    db_item = services.items.get_item(db, item_id=items_id)
    if db_item is None:
        raise HTTPException(status_code=400, detail="Item does not exist")
    return services.item_datas.create_item_item_data(db=db, item_data=item_data, item_id=items_id)


@router.get("/itemDatas/", response_model=List[schemas.item_datas.ItemData])
def read_item(db: Session = Depends(models.database.get_db)):
    items_data = services.item_datas.get_item_datas(db)
    return items_data


@router.get("/itemDatas/{item_datas_id}", response_model=schemas.item_datas.ItemData)
def read_items(item_datas_id: int, db: Session = Depends(models.database.get_db)):
    db_item_data = services.item_datas.get_item_data(db, item_datas_id=item_datas_id)
    if db_item_data is None:
        raise HTTPException(status_code=404, detail="Item Data not found")
    return db_item_data

@router.get("/itemDatas/item/{item_id}", response_model=List[schemas.item_datas.ItemData])
def read_items_by_owner(item_id: int, db: Session = Depends(models.database.get_db)):
    items_data = services.item_datas.get_item_datas_by_owner_id(db, item_id)
    return items_data
