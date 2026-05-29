from sqlalchemy import Column, Integer, String, Float
from ..db import Base

class Campaign(Base):
    __tablename__ = "campaigns"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    category = Column(String)
    goal = Column(Float)
    pledged = Column(Float)
    state = Column(String)
    launched = Column(String)