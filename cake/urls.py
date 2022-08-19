from django.urls import path
from . import views

urlpatterns =[
    path('make/', views.make, name='make'),
    path('make2/<int:id>', views.make2, name='make2'),
    path('order/<str:whatCake>/<int:cake_id>', views.order, name='order'),
    path('payment/<int:order_id>', views.payment, name='payment'),
    path('watchcake/', views.watch_cake, name='watch_cake'),
]