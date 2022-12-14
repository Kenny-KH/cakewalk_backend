from . import views
from django.urls import path



urlpatterns = [
    path('login/', views.login, name='login'),
    path('login/kakao/', views.kakaoLogin, name='kakaoLogin'),
    path('login/kakao/callback/', views.kakaocallback),

    path('signup/', views.signup, name='signup'),
    path('business-login/', views.businessLogin, name='businessLogin'),
    path('business-signup/', views.businessSignup, name='businessSignup'),
    path('business-signup-detail/', views.businessSignupDetail, name='business-signup-detail'),
    path('logout', views.logout, name='logout')
]
