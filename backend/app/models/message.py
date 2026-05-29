# app/models/message.py
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from ..db import Base

class Message(Base):
    __tablename__ = "messages"

    id         = Column(Integer, primary_key=True, index=True)
    startup_id = Column(Integer, ForeignKey("startups.id"), nullable=False)
    sender     = Column(String, nullable=False)   # "investor" or "entrepreneur"
    name       = Column(String, nullable=False)   # display name
    message    = Column(String, nullable=False)
    avatar     = Column(String, nullable=True)
    timestamp  = Column(DateTime(timezone=True), server_default=func.now())