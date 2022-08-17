from django.contrib import admin
from account.models import User
from .models import Order, Store
# Register your models here.
admin.site.register(User)  # You must unregister first
admin.site.register(Store)
admin.site.register(Order)