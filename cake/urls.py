from django.urls import path
from . import views

urlpatterns =[
    path('make/', views.make, name='make'),
    path('order/', views.order, name='order'),
    path('payment/', views.payment, name='payment'),
    path('watchcake/', views.watch_cake, name='watch_cake'),
]