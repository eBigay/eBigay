
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),

    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('logout/', views.logout_user, name='logout'),

    path('add_product/', views.add_product, name='add_product'),
    path('update_product/<int:pk>/', views.update_product, name='update_product'),
    path('delete_product/<int:pk>/', views.delete_product, name='delete_product'),

    path('signin_otp/', views.signin_otp, name='signin_otp'),
    path('otp/', views.validate_otp, name='otp'),

    path('authors/<str:pk>/', views.authors, name='authors'),
    path('novels/<str:pk>/', views.novels, name='novels'),

]
