# Create your models here.
from django.core.validators import RegexValidator
from django.db import models
from datetime import datetime
from django.forms import CharField


# Create your models here.
class BsSignupDetail(models.Model):
    tax = models.CharField(max_length=30)
    bsNum = models.IntegerField()
    type = models.CharField(max_length=50)
    bsName = models.CharField(max_length=100)
    repName = models.CharField(max_length=12)
    birth = models.IntegerField()
    phoneNum = models.IntegerField()
    address = models.TextField()
    registeration = models.ImageField()
    report = models.ImageField()
    
from django.contrib.auth.models import AbstractBaseUser, UserManager, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, tel, address = None, business_num = None , nickname = None, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            nickname = nickname,
            tel = tel,
            address = address,
            business_num = business_num
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, business_num, name,tel, email,password=None):
        user = self.create_user( 
            business_num = business_num,
            password=password,
            name=name,
            tel = tel,
            email=email
        )
        user.is_business = True
        user.save(using=self._db)
        return user
        
        
class User(AbstractBaseUser):
    business_num = models.IntegerField(null=True, unique=True)
    name = models.CharField(max_length=10)
    nickname = models.CharField(max_length=10,null=True, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    tel = models.CharField(max_length=40)
    address = models.CharField(max_length=300, null=True)
    is_business = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'user'

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']