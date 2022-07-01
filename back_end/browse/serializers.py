from rest_framework import serializers

from Torob.models import Product, ShoppingDetail, Shop


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'

    def create(self, validated_data):
        shop1 = Shop.objects.create(**validated_data)
        shop1.save()
        return shop1


class ShoppingDetailSerializer(serializers.ModelSerializer):
    shop = ShopSerializer(read_only=True, many=False)

    class Meta:
        model = ShoppingDetail
        fields = ("price", "shop")

    def create(self, validated_data):
        shop_detail1 = ShoppingDetail.objects.create(**validated_data)
        shop_detail1.save()
        return shop_detail1


class ProductSerializer(serializers.ModelSerializer):
    shops = ShopSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        prod = Product.objects.create(**validated_data)
        prod.save()
        return prod
