import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="testdb",
    user="postgres",
    password="1234"  # 
)

cur = conn.cursor()
cur.execute("SELECT version();")

print("Connected!")
print(cur.fetchone())

cur.close()
conn.close()
