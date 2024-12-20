from sqlalchemy import Column, ForeignKey, Integer, String
from fastapi_backend.core.models.database import Base
from sqlalchemy.orm import relationship


class Item(Base):
    __tablename__ = 'items'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    link = Column(String)
    price_change = Column(String)
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="items")
    itemData = relationship("ItemData", back_populates="owner")
