
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db, Base, engine
from ..models import Note
from ..schemas import NoteCreate, NoteOut

router = APIRouter()

Base.metadata.create_all(bind=engine)

@router.get("/", response_model=list[NoteOut])
def list_notes(db: Session = Depends(get_db)):
    return db.query(Note).all()

@router.post("/", response_model=NoteOut)
def create_note(payload: NoteCreate, db: Session = Depends(get_db)):
    note = Note(**payload.model_dump())
    db.add(note)
    db.commit()
    db.refresh(note)
    return note
