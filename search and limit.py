from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["university"]
collection = db["students"]

sample_data = [
    {"name": "Ayesha", "age": 21, "department": "CSE"},
    {"name": "Tanvir", "age": 23, "department": "EEE"},
    {"name": "Rumi", "age": 22, "department": "CSE"},
    {"name": "Farhan", "age": 24, "department": "ME"},
    {"name": "Sadia", "age": 21, "department": "CSE"},
    {"name": "Nayeem", "age": 25, "department": "CE"},
    {"name": "Lamia", "age": 23, "department": "EEE"}
]

collection.delete_many({})
collection.insert_many(sample_data)

query = {"department": "CSE"}
limit_count = 2

results = collection.find(query).limit(limit_count)

for student in results:
    print(student)
