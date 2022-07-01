from rest_framework import serializers

from Torob.models import Product, Complaint, Shop


class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'

    def create(self, validated_data):
        comp = Complaint.objects.create(**validated_data)
        comp.save()
        return comp


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'

    def create(self, validated_data):
        shop1 = Shop.objects.create(**validated_data)
        shop1.save()
        return shop1
