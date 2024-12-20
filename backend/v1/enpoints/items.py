from typing import List

from fastapi import APIRouter

from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

from fastapi_backend.core import models, schemas, services

router = APIRouter()


@router.post("/users/{user_id}/items/", response_model=schemas.items.Item)
def create_item_for_user(
        user_id: int,
        item: schemas.items.ItemCreate,
        db: Session = Depends(models.database.get_db)):
    db_user = services.users.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=400, detail="User does not exist")
    return services.items.create_user_item(db=db, item=item, user_id=user_id)


@router.get("/items/", response_model=List[schemas.items.Item])
def read_item(db: Session = Depends(models.database.get_db)):
    items = services.items.get_items(db)
    return items


@router.get("/items/{item_id}", response_model=schemas.items.Item)
def read_items(item_id: int, db: Session = Depends(models.database.get_db)):
    db_item = services.items.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item


@router.patch("/items/{item_id}", response_model=schemas.items.Item)
def update_item(item_id: int, item_update: schemas.items.ItemUpdate, db: Session = Depends(models.database.get_db)):
    db_item = services.items.patch_user_item(db=db, item_update=item_update, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item


