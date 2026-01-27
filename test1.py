import psycopg2
from psycopg2 import sql

DB_NAME = "testdb"
CONN_KW = {
    "host": "localhost",
    "user": "postgres",
    "password": "1234",  # 
}


def connect_db(dbname: str) -> psycopg2.extensions.connection:
    return psycopg2.connect(database=dbname, **CONN_KW)


try:
    conn = connect_db(DB_NAME)
except psycopg2.OperationalError as exc:
    if f'database "{DB_NAME}" does not exist' in str(exc):
        admin_conn = connect_db("postgres")
        admin_conn.autocommit = True
        with admin_conn.cursor() as cur:
            cur.execute(sql.SQL("CREATE DATABASE {}").format(sql.Identifier(DB_NAME)))
        admin_conn.close()
        conn = connect_db(DB_NAME)
    else:
        raise

with conn:
    with conn.cursor() as cur:
        cur.execute("SELECT version();")
        print("Connected!")
        print(cur.fetchone())
