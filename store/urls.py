from django import views
from django.contrib import admin
from django.urls import path
from store import views
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('manage', views.managePage, name="storeManagePage"),
] 
