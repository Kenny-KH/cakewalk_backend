from django import views
from django.contrib import admin
from django.urls import path
from store import views
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('manage', views.manage, name="manage"),
    path('manage_store', views.manageStore, name="manage_store"),
    path('manage6', views.manage6, name="storeManage6"),
    path('detail/<int:store_id>', views.detail, name="storeDetail"),
    path('inquire', views.inquire, name="inquire"),
] 
