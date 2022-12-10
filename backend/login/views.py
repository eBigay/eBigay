from django.shortcuts import render
from django.http import HttpResponse


def signup(request):
    return render(request, 'SignUp.html')


def home(request):
    return render(request, 'Home.html')


def login(request):

    return request


def signin(request):
    return request
