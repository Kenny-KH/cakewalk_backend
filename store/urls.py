from django import views
from django.contrib import admin
from django.urls import path
from store import views
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('manage', views.manage, name="manage"),
    path('manage2', views.manageStore, name="manage_store"),
    path('manage2_before', views.manageStoreBefore, name="manage_store_before"),
    path('manage3', views.manage3, name="manage3"),
    path('manage4', views.manage4, name="manage4"),
    path('manage5', views.manage5, name="manage5"),
    path('manage6_before', views.manage6_before, name="manage6_before"),
    path('manage6', views.manage6, name="manage6"),
    path('manage7', views.manage7, name="manage7"),
    path('detail/<int:store_id>', views.detail, name="storeDetail"),
    path('inquire', views.inquire, name="inquire"),
    path('manage_chatting', views.manageChatting, name="manage_chatting"),
    path('store_info', views.storeInfo, name="store_info"),
    path('store_info_more', views.storeInfoMore, name="store_info_more"),
] 
