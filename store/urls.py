from django import views
from django.contrib import admin
from django.urls import path
from store import views
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('manage', views.manage1, name="storeManage1"),
    path('manage_store', views.manageStore, name="storeManage2"),
    path('manage6', views.manage6, name="storeManage6"),
    path('detail', views.detail, name="storeDetail"),
    path('watch_store', views.watchStore, name="watch_store"),
] 
