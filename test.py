from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")
db = client["test_db"]
print("Connected to MongoDB Server!")
collection = db["students"]
collection.insert_one({"name": "Shuvo", "age": 22})

for doc in collection.find():
    print(doc)
