from sqlalchemy.orm import Session
from fastapi_backend.core import models, schemas


def get_item_data(db: Session, item_datas_id: int):
    return db.query(models.item_datas.ItemData).get(item_datas_id)


def get_item_datas(db: Session):
    return db.query(models.item_datas.ItemData).all()


def get_item_datas_by_owner_id(db: Session, owner_id: int):
    return db.query(models.item_datas.ItemData).filter(models.item_datas.ItemData.owner_id == owner_id).all()


def create_item_item_data(db: Session, item_data: schemas.item_datas.ItemDataCreate, item_id: int):
    db_item_data = models.item_datas.ItemData(price=item_data.price, dateAdded=item_data.dateAdded, owner_id=item_id)
    db.add(db_item_data)
    db.commit()
    db.refresh(db_item_data)
    return db_item_data
