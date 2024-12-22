from typing import Sequence

from sqlmodel import Session, select

from core.models.uni import Uni, UniCreate


def create_uni(uni: UniCreate,session: Session) -> Uni:
    session.add(uni)
    session.commit()
    session.refresh(uni)
    return uni


def read_uni(session: Session) -> Sequence[Uni]:
    unis = session.exec(select(Uni)).all()
    return unis


def read_unis(uni_id: int, session: Session) -> Uni | None:
    statement = select(Uni).where(Uni.id == uni_id)
    uni = session.exec(statement).first()
    return uni