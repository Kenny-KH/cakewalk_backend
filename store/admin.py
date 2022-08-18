from django.contrib import admin

from .models import StoreCake

@admin.register(StoreCake)
class StoreCakeOrder(admin.ModelAdmin):
    ordering = ('store',)
    