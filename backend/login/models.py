from django.conf import settings
from django.db import models
#


# class DataBase(models.Model):
#     name = models.CharField(max_length=100)
#
#     def __str__(self):
#         return self.name


class User(models.Model):
    # username = models.ForeignKey(DataBase, on_delete=models.CASCADE)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.username

#
# user = models.Users(username, password, email)
# user.save()
# user = models.DataBase.objects.create(username=username, password=password, email=email)
