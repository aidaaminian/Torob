from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    favorites = models.ManyToManyField('Torob.Product', related_name='favorites')
    recent_views = models.ManyToManyField('Torob.Product', related_name='recent_views')
