from sqlalchemy import Column, Integer, String
from fastapi_backend.core.models import database
from sqlalchemy.orm import relationship


class User(database.Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    username = Column(String(50), unique=True)
    password = Column(String)
    items = relationship("Item", back_populates="owner")