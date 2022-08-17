from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager, BaseUserManager
# Create your models here.
class BsSignupDetail(models.Model):
    author = models.ForeignKey("User", related_name="user", on_delete=models.CASCADE)
    tax = models.CharField(max_length=30)
    bsNum = models.IntegerField()
    type = models.CharField(max_length=50)
    bsName = models.CharField(max_length=100)
    repName = models.CharField(max_length=12)
    birth = models.IntegerField()
    phoneNum = models.IntegerField()
    insta = models.CharField(max_length=100)
    address = models.TextField()
    registeration = models.ImageField()
    report = models.ImageField()
    notice = models.TextField(blank=True, null=True)
    
    



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
        user.is_admin = True 
        user.is_staff = True
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
    is_admin = models.BooleanField(default=False) 
    is_staff = models.BooleanField(default=False)   
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    
    def has_perm(self, perm, obj=None):
        return self.is_staff
    
    def has_module_perms(self, app_label):
        return self.is_staff

    class Meta:
        db_table = 'user'

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']