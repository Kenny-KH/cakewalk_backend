from django.db import models
from django.conf import settings

# Create your models here.
class UserCake(models.Model):
    user = models.ForeignKey("account.User", on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    price = models.IntegerField(default=32500)
    image = models.ImageField()
    pub_date = models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.name