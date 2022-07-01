from django.contrib.auth.models import AbstractUser
from django.db import models

from accounts.models import User


class Shop(models.Model):
    shop_id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(null=True, blank=True, max_length=120)
    link = models.URLField(null=True, blank=True, max_length=200)


class Product(models.Model):
    product_id = models.PositiveIntegerField(primary_key=True)
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
    color = models.CharField(max_length=50, null=True, blank=True)
    shops = models.ManyToManyField(Shop, through='ShoppingDetail')


class ShoppingDetail(models.Model):
    price = models.PositiveIntegerField(null=True, blank=True)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    shop_id = models.ForeignKey(Shop, on_delete=models.CASCADE)


class Complaint(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    shop_id = models.ForeignKey(Shop, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    DESC_CHOICES = [
        ('a', 'NotRelated'),
        ('b', 'IncorrectData'),
        ('c', 'FollowUp')
    ]
    description = models.CharField(max_length=2, choices=DESC_CHOICES, default="c")
