from django.db import models

# Create your models here.

class User (models.Model):
    User_id = models.IntegerField()
    nick_name = models.CharField(max_length=50)
    telNumberRegex = RegexValidators(regax = r'^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$')
    tel = models.CharField(validators = [phoneNumberRegex], max_length=11, unique=True)
    photo = models.ImageField()
    # kakao_token =
    
class User_Cake (models.Model):
    user_cake_id = models.IntegerField()
    image_url = models.URLField(max_length=200)
    create_date = models.DateTimeField()
