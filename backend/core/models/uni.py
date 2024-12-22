from typing import Optional

from sqlmodel import Field, SQLModel


class UniBase(SQLModel):
    name: str
    rating: Optional[int] = None

class UniCreate(UniBase):
    pass

class Uni(UniBase, table=True):
    id: int = Field(default=None, primary_key=True)

    class Config:
        from_attributes = True