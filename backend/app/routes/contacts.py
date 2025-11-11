
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db, Base, engine
from ..models import Contact
from ..schemas import ContactCreate, ContactOut

router = APIRouter()
Base.metadata.create_all(bind=engine)

@router.get("/", response_model=list[ContactOut])
def list_contacts(db: Session = Depends(get_db)):
    return db.query(Contact).all()

@router.post("/", response_model=ContactOut)
def create_contact(payload: ContactCreate, db: Session = Depends(get_db)):
    c = Contact(**payload.model_dump())
    db.add(c)
    db.commit()
    db.refresh(c)
    return c
