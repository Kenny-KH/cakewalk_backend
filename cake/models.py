from django.core.validators import RegexValidator
from django.db import models
from datetime import datetime

from django.forms import CharField

# Create your models here.


    

class Order(models.Model):
    price = models.IntegerField()
    address = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    cake = models.ImageField()
    size = models.CharField(max_length=30)
    flavor = models.CharField(max_length=30)
    additional = models.CharField(max_length=50)
    require = models.CharField(max_length=50)
    storeCake = models.ForeignKey("store.StoreCake", on_delete=models.CASCADE, null=True, blank=True)
    userCake = models.ForeignKey("user.UserCake", on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey("account.User", on_delete=models.CASCADE)
    store = models.ForeignKey("account.BsSignupDetail", on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return self.date + "주문"

