from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    product = models.CharField(max_length=200, null=True)
    description = models.CharField(max_length=200, null=True)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.product


class TempUser(models.Model):
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.email


class Author(models.Model):
    author = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.author


class Novel(models.Model):
    name = models.CharField(max_length=200, null=True)
    description = models.CharField(max_length=300, null=True)
    author = models.ForeignKey(Author, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name

