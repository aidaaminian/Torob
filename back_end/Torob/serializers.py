from rest_framework import serializers

from Torob.models import Product, Complaint, Shop
from accounts.serializers import UserSerializer
from browse.serializers import ProductSerializer, ShopSerializer


class ComplaintSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    shop = ShopSerializer(read_only=True)

    class Meta:
        model = Complaint
        fields = '__all__'

    def create(self, validated_data):
        comp = Complaint.objects.create(**validated_data)
        comp.save()
        return comp
