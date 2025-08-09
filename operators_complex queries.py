from pymongo import MongoClient

# Connect to local MongoDB server
client = MongoClient('mongodb://localhost:27017/')

# Database and collection setup
db = client['test_db']
collection = db['employees']

# Clear collection if exists
collection.delete_many({})

# Sample data insert
employees = [
    {"name": "Alice", "age": 28, "department": "HR", "salary": 5000, "skills": ["communication", "recruitment"], "address": {"city": "Dhaka", "zip": "1207"}},
    {"name": "Bob", "age": 34, "department": "Engineering", "salary": 8000, "skills": ["python", "mongodb", "docker"], "address": {"city": "Chittagong", "zip": "4000"}},
    {"name": "Charlie", "age": 29, "department": "Engineering", "salary": 7000, "skills": ["java", "c++", "linux"], "address": {"city": "Dhaka", "zip": "1212"}},
    {"name": "David", "age": 40, "department": "Management", "salary": 12000, "skills": ["management", "communication"], "address": {"city": "Sylhet", "zip": "3100"}},
    {"name": "Eva", "age": 25, "department": "HR", "salary": 4800, "skills": ["recruitment", "organizing"], "address": {"city": "Dhaka", "zip": "1217"}},
]

collection.insert_many(employees)

print("=== All Employees ===")
for emp in collection.find():
    print(emp)

print("\n=== Complex Queries with Operators ===")

# 1. Find employees in Engineering dept with salary > 7000
query1 = {"department": "Engineering", "salary": {"$gt": 7000}}
print("\n1. Engineering dept with salary > 7000:")
for emp in collection.find(query1):
    print(emp)

# 2. Find employees aged between 28 and 35 inclusive
query2 = {"age": {"$gte": 28, "$lte": 35}}
print("\n2. Employees age between 28 and 35:")
for emp in collection.find(query2):
    print(emp)

# 3. Employees who have 'communication' skill
query3 = {"skills": "communication"}
print("\n3. Employees with 'communication' skill:")
for emp in collection.find(query3):
    print(emp)

# 4. Employees who work in either 'HR' or 'Management'
query4 = {"department": {"$in": ["HR", "Management"]}}
print("\n4. Employees in HR or Management:")
for emp in collection.find(query4):
    print(emp)

# 5. Employees NOT in Dhaka city
query5 = {"address.city": {"$ne": "Dhaka"}}
print("\n5. Employees not in Dhaka:")
for emp in collection.find(query5):
    print(emp)

# 6. Employees with salary between 5000 and 10000 and have skill 'python' or 'java'
query6 = {
    "$and": [
        {"salary": {"$gte": 5000, "$lte": 10000}},
        {"skills": {"$in": ["python", "java"]}}
    ]
}
print("\n6. Employees salary 5k-10k and skill python or java:")
for emp in collection.find(query6):
    print(emp)

# 7. Count employees in each department (Aggregation)
pipeline = [
    {"$group": {"_id": "$department", "count": {"$sum": 1}}}
]
print("\n7. Number of employees in each department:")
for doc in collection.aggregate(pipeline):
    print(doc)

# 8. Find employees with name starting with 'A' or 'E' (Regex)
query8 = {"name": {"$regex": "^[AE]", "$options": "i"}}
print("\n8. Employees with name starting with A or E:")
for emp in collection.find(query8):
    print(emp)

# 9. Update: Increase salary by 10% for HR department employees
update_result = collection.update_many(
    {"department": "HR"},
    {"$mul": {"salary": 1.10}}
)
print(f"\n9. Updated salaries for HR department: Modified count = {update_result.modified_count}")

# Show updated HR employees
print("HR employees after salary update:")
for emp in collection.find({"department": "HR"}):
    print(emp)

# 10. Delete employees older than 39
delete_result = collection.delete_many({"age": {"$gt": 39}})
print(f"\n10. Deleted employees older than 39: Deleted count = {delete_result.deleted_count}")

print("\nFinal employees in collection:")
for emp in collection.find():
    print(emp)
