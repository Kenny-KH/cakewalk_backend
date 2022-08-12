from django import views
from django.contrib import admin
from django.urls import path
from store import views

from . import views

urlpatterns = [
    path('mypage', views.myPage, name="user_mypage"),
] 
