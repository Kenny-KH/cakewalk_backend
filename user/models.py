from django.db import models
from django.conf import settings
# Create your models here.
class UserCake(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    cake_img = models.ImageField()
    pub_date = models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.cake_img