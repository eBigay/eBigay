from django.shortcuts import render
from pymongo import MongoClient
from django.http import HttpResponse

from logon import models

# DB Connection
cluster = MongoClient("mongodb://localhost:27017")
db = cluster["eBigay"]
collection = db["users"]
find = collection.find({})
next_page = ''


def signup(request):
    return render(request, 'SignUp.html')


def home(request):
    return render(request, 'Home.html')


def login(request):
    global next_page
    username = request.POST['username']
    password = request.POST['password']
    email = request.POST['email']

    for i in find:
        if username not in i['username']:
            sumdb = collection.count_documents({})
            collection.insert_one({'_id': sumdb, 'username': username, 'password': password, 'email': email})
            user = {'name': username}
            next_page = render(request, 'Home.html', user)
        else:
            next_page = render(request, 'SignIn.html')

    return next_page


def signin(request):
    global next_page
    username = request.POST['username']
    password = request.POST['password']
    for i in find:
        if username in i['username'] and password in i["password"]:
            user = {'name': username}
            next_page = render(request, 'Home.html', user)
        else:
            next_page = render(request, 'SignUp.html')

    return next_page
