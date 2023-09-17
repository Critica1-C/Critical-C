import os

BASE_DIR = os.path.dirname(__file__)

aws_db = {
    "user": "ㅇ",
    "password": "ㅇ",
    "host": "ㅇ",
    "port": "ㅇ",
    "database": "ㅇ",
}

SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{aws_db['user']}:{aws_db['password']}@{aws_db['host']}:{aws_db['port']}/{aws_db['database']}?charset=utf8"
SQLALCHEMY_TRACK_MODIFICATIONS = 1
secret_key = "asdasdasdasd"
