from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from .models import Product, TempUser


class CreateUser(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class CreateProduct(ModelForm):
    class Meta:
        model = Product
        fields = '__all__'


class CreateTempUser(ModelForm):
    class Meta:
        model = TempUser
        fields = '__all__'

