# -*- coding: utf-8 -*-
from datetime import datetime
from sqlalchemy import (
    Column,
    Date,
    Integer,
    String,
    Table,
    MetaData,
    create_engine,
)

from databases import Database

DATABASE_URL = "mysql+pymysql://root:@localhost/test?charset=utf8mb4"

engine = create_engine(DATABASE_URL)
metadata = MetaData()

User = Table(
    "user",
    metadata,
    Column('id', Integer, primary_key=True),
    Column('uuid', Integer),
    Column('birthday', Date),
    Column('sex', String(2,collation='utf8mb4_general_ci')),
)

database = Database(DATABASE_URL)