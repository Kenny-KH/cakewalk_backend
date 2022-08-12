from . import views
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('business-login/', views.businessLogin, name='businessLogin'),
    path('business-signup/', views.businessSignup, name='businessSignup'),
    path('business-signup-deatil/', views.businessSignupDetail, name='business-signup-detail'),
    path('logout', views.logout, name='logout')
]
