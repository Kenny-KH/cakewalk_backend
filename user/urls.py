from django import views
from django.contrib import admin
from django.urls import path
from store import views

from . import views

urlpatterns = [
    path('mypage', views.myPage, name="user_mypage"),
    path('mypage2', views.myPage2, name="user_mypage2"),
    path('mypage3', views.myPage3, name="user_mypage3"),
    path('mypage4', views.myPage4, name="user_mypage4"),
    path('mypage5', views.myPage5, name="user_mypage5"),
    path('mypage6', views.myPage6, name="user_mypage6"),
    path('mypage7', views.myPage7, name="user_mypage7"),
    path('user_review', views.userReview, name="user_review"),
    path('user_chatting', views.userChatting, name="user_chatting"),
] 
