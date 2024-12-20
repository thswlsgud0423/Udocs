from sqlalchemy import Column, ForeignKey, Integer, Date
from fastapi_backend.core.models.database import Base
from sqlalchemy.orm import relationship


class ItemData(Base):
    __tablename__ = 'itemDatas'

    id = Column(Integer, primary_key=True, index=True)
    price = Column(Integer)
    dateAdded = Column(Date)
    owner_id = Column(Integer, ForeignKey("items.id"))

    owner = relationship("Item", back_populates="itemData")