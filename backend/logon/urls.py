from django.urls import path
from logon import views

urlpatterns = [
    path('', views.signup, name='home'),
    path('login/', views.login, name='login'),
    path('signin/', views.home, name='signin'),
]