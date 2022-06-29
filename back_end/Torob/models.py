from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(null=True, blank=True, max_length=15)


class Product(models.Model):
    name = models.CharField(null=True, blank=True, max_length=120)
    img_src = models.URLField(null=True, blank=True)
    min_price = models.PositiveIntegerField(null=True, blank=True)
    max_price = models.PositiveIntegerField(null=True, blank=True)
    head = models.CharField(null=True, blank=True, max_length=50)
    category = models.CharField(null=True, blank=True, max_length=50)
    sub_category = models.CharField(null=True, blank=True, max_length=50)
    internal_storage = models.IntegerField(null=True, blank=True)
    weight = models.IntegerField(null=True, blank=True)
    warranty = models.IntegerField(null=True, blank=True)
    color = models.CharField(max_length=50)


class Shop(models.Model):
    name = models.CharField(null=True, blank=True, max_length=120)
    price = models.PositiveIntegerField(null=True, blank=True)
    link = models.URLField(null=True, blank=True, max_length=200)
