
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db, Base, engine
from ..models import Event
from ..schemas import EventCreate, EventOut

router = APIRouter()
Base.metadata.create_all(bind=engine)

@router.get("/", response_model=list[EventOut])
def list_events(db: Session = Depends(get_db)):
    return db.query(Event).all()

@router.post("/", response_model=EventOut)
def create_event(payload: EventCreate, db: Session = Depends(get_db)):
    e = Event(**payload.model_dump())
    db.add(e)
    db.commit()
    db.refresh(e)
    return e
