
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class NoteCreate(BaseModel):
    title: str
    content: str

class NoteOut(NoteCreate):
    id: int
    class Config:
        from_attributes = True

class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    status: str = "todo"
    priority: str = "medium"

class TaskOut(TaskCreate):
    id: int
    class Config:
        from_attributes = True

class ContactCreate(BaseModel):
    name: str
    email: Optional[EmailStr] = None

class ContactOut(ContactCreate):
    id: int
    class Config:
        from_attributes = True

class EventCreate(BaseModel):
    title: str
    start: datetime
    end: datetime
    location: Optional[str] = None
    description: Optional[str] = None

class EventOut(EventCreate):
    id: int
    class Config:
        from_attributes = True
