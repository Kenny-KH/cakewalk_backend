from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('mypage', views.myPage, name="user_mypage"), # 마이페이지 메인
    path('mypage2', views.myPage2, name="user_mypage2"), # 주문내역
    path('mypage3', views.myPage3, name="user_mypage3"), #도안 관리
    path('mypage4', views.myPage4, name="user_mypage4"), # 작성 리뷰
    path('mypage5', views.myPage5, name="user_mypage5"), # 1대1 문의
    path('mypage6', views.myPage6, name="user_mypage6"), # 회원정보 수정
    path('mypage7', views.myPage7, name="user_mypage7"), # My Talk
    path('user_review', views.userReview, name="user_review"), #리뷰하기
    path('user_chatting', views.userChatting, name="user_chatting"), # 사용자 채팅창
    path('usercake/', views.usercake, name='user_cake'),
] 
