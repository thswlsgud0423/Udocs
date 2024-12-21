from models.uni import Uni
from main import app
from sqlmodel import Session, select
from fastapi import Depends


def create_uni(uni: Uni, session: Session = Depends):
    session.add(uni)
    session.commit()
    session.refresh(uni)
    return uni


def read_uni(session: Session = Depends):
    heroes = session.exec(select(Uni)).all()
    return heroes
