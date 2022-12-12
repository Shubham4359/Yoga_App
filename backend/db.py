import pymongo
mongouri="mongodb://localhost:27017"
client = pymongo.MongoClient(mongouri)
db = client["todolist"]
collection = db["todoapp"]

def get_all():
    data = []
    response = collection.find({},{"_id":0})
    for i in response:
    #    i["_id"]=str(i["_id"])
        data.append(i)
    return data

def get_one(title):
    response = collection.find_one({"name":title},{"_id":0})
    return response

def create(todo):
    todo = dict(todo)
    id = collection.insert_one(todo)
    response = collection.find_one({"_id":id.inserted_id},{"_id":0})
    return response

def update(todo):
    todo = dict(todo)
    response = collection.update_one({"name":todo["name"]},{"$set":todo})
    response = collection.find_one({"name":todo["name"]},{"_id":0})
    return response

def delete(title):
    response = collection.delete_one({"name":title})
    return response.deleted_count
