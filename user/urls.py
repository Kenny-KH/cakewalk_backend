from django import views
from django.contrib import admin
from django.urls import path
from store import views

from . import views

urlpatterns = [
    path('mypage', views.myPage, name="user_mypage"),
    path('mypage2', views.myPage2, name="user_mypage"),
    path('mypage3', views.myPage3, name="user_mypage"),
    path('mypage4', views.myPage4, name="user_mypage"),
    path('mypage5', views.myPage5, name="user_mypage"),
    path('mypage6', views.myPage6, name="user_mypage"),
    path('mypage7', views.myPage7, name="user_mypage"),
] 
