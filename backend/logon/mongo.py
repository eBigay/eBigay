from pymongo import MongoClient


# DB Connection
cluster = MongoClient("mongodb://localhost:27017")
db = cluster["eBigay"]
collection = db["users"]
sumdb = collection.count_documents({})
find = collection.find({})



collection.insert_one({'_id': sumdb, 'username': 'or', 'password': '1234', 'email': 'or@or.com'})

username = 'or'
password = '1234'

for i in find:
    if username in i['username'] and password in i["password"]:
        print(i)
        break
    else:
        print('nope')


# collection.drop()
