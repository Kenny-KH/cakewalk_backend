from django.core.validators import RegexValidator
from django.db import models
from datetime import datetime
from account.models import BsSignupDetail


# Create your models here.
    
    
class StoreCake(models.Model):
    store = models.ForeignKey(BsSignupDetail, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    price_mini = models.IntegerField(blank=True, null=True)
    price_1 = models.IntegerField(blank=True, null=True)
    price_2 = models.IntegerField(blank=True, null=True)
    price_3 = models.IntegerField(blank=True, null=True)
    image = models.ImageField(upload_to = 'store/cake')
    code = models.IntegerField(default=1)
    
    def __str__(self):
        return str(self.store) + ", " + self.name