from django.contrib import admin
from account.models import User
from .models import StoreOrder
# Register your models here.
admin.site.register(User)  # You must unregister first
admin.site.register(StoreOrder)