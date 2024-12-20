from sqlalchemy.orm import Session

from fastapi_backend.core import models, schemas


def get_user(db: Session, user_id: int):
    return db.query(models.users.User).get(user_id)


def get_user_by_username(db: Session, username: str):
    return db.query(models.users.User).filter(models.users.User.username == username).first()


def get_users(db: Session):
    return db.query(models.users.User).all()


def create_user(db: Session, user: schemas.users.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.users.User(username=user.username, password=fake_hashed_password,
                          first_name=user.first_name, last_name=user.last_name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
