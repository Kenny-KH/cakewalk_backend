from django.core.validators import RegexValidator
from django.db import models
from datetime import datetime

from django.forms import CharField

# Create your models here.


    

class StoreOrder(models.Model):
    photo = models.ImageField()
    price = models.IntegerField()
    address = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    cake = models.ImageField()
    size = models.CharField(max_length=30)
    flavor = models.CharField(max_length=30)
    additional = models.CharField(max_length=50)
    require = models.CharField(max_length=50)
    cakeObject = models.ForeignKey("store.StoreCake", on_delete=models.CASCADE)
"""
class order(models.Model):
    mapSearch = models.ForeignKey(on_delete = models.CASCADE)
    orderDate = models.DateTimeField()
    cakeImg = models.ImageField(upload_to = 'cake/' )
    cakeSize = models.CharField(max_length=10)
    cakeTaste = models.CharField(max_length=50)
    addOptions = models.CharField(max_length=50)
    cakeRequest = models.TextField(max_length=500, blank=True)


    class Meta:
        db_table = 'map'
"""

