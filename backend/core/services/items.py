from sqlalchemy.orm import Session

from fastapi_backend.core import models, schemas


def get_item(db: Session, item_id: int):
    return db.query(models.items.Item).filter(models.items.Item.id == item_id).first()


def get_items(db: Session):
    return db.query(models.items.Item).all()


def create_user_item(db: Session, item: schemas.items.ItemCreate, user_id: int):
    print(item)
    db_item = models.items.Item(name=item.name, link=item.link, price_change=item.price_change, owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


def patch_user_item(db: Session, item_update: schemas.items.ItemUpdate, item_id: int):
    db_item = db.query(models.items.Item).filter(models.items.Item.id == item_id).first()
    if db_item:
        updated_data = item_update.dict(exclude_unset=True)
        for key, value in updated_data.items():
            setattr(db_item, key, value)

        print(updated_data)
        db.commit()
        db.refresh(db_item)
        return db_item
    return None
