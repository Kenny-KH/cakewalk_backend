from django.core.validators import RegexValidator
from django.db import models
from datetime import datetime

from django.forms import CharField


# Create your models here.
class Store(models.Model):
    tax = models.CharField(max_length=30)
    businessNum = models.IntegerField()
    type = models.CharField(max_length=50)
    bsName = models.CharField(max_length=100)
    repName = models.CharField(max_length=12)
    birth = models.IntegerField()
    phoneNum = models.IntegerField()
    address = models.TextField()
    registeration = models.ImageField()
    report = models.ImageField()