from pymongo import MongoClient


# 1. Connect to MongoDB

client = MongoClient("mongodb://localhost:27017/")  # Default local server
db = client["mydatabase"]
collection = db["mycollection"]

# 2. Insert sample data (Optional for testing)

sample_data = [
    {"name": "Alice", "age": 25, "city": "Dhaka"},
    {"name": "Bob", "age": 30, "city": "Chittagong"},
    {"name": "Charlie", "age": 22, "city": "Sylhet"},
    {"name": "David", "age": 25, "city": "Dhaka"},
]
collection.delete_many({})  # Clear existing data
collection.insert_many(sample_data)


# 3. Find all documents

print("\nAll documents:")
for doc in collection.find():
    print(doc)

# 4. Find with specific value

print("\nFind where city is 'Dhaka':")
for doc in collection.find({"city": "Dhaka"}):
    print(doc)

# 5. Find one document

print("\nFind one document:")
print(collection.find_one())


# 6. Find with operators (age > 23)

print("\nFind where age > 23:")
for doc in collection.find({"age": {"$gt": 23}}):
    print(doc)

-
# 7. Projection (show only name and age)

print("\nProjection - only name and age:")
for doc in collection.find({}, {"_id": 0, "name": 1, "age": 1}):
    print(doc)


# 8. Sorting by age (ascending)

print("\nSorted by age:")
for doc in collection.find().sort("age", 1):
    print(doc)


# 9. Limit results

print("\nLimit to 2 results:")
for doc in collection.find().limit(2):
    print(doc)


# 10. Using regex (name starts with 'A')

print("\nFind names starting with 'A':")
for doc in collection.find({"name": {"$regex": "^A"}}):
    print(doc)


# 11. Count documents
print("\nCount of people from Dhaka:")
print(collection.count_documents({"city": "Dhaka"}))


# 12. Distinct field values

print("\nDistinct cities:")
print(collection.distinct("city"))
