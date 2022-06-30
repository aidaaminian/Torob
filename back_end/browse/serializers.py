from rest_framework import serializers

from Torob.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        prod = Product.objects.create(**validated_data)
        prod.save()
        return prod
