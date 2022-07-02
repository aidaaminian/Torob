from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from Torob.models import Product, Shop
from browse.serializers import ProductSerializer, ShopSerializer


@api_view(['GET'])
@permission_classes([AllowAny, ])
def get_category_products(request, head, category):
    prods = Product.objects.filter(head=head, category=category)
    serializer = ProductSerializer(prods, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny, ])
def get_head_products(request, head):
    prods = Product.objects.filter(head=head)
    serializer = ProductSerializer(prods, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny, ])
def get_products(request, head, category, sub_category):
    prods = Product.objects.filter(head=head, category=category, sub_category=sub_category)
    serializer = ProductSerializer(prods, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny, ])
def get_single_product(request, product_id):
    prod1 = Product.objects.get(product_id=product_id)
    serializer = ProductSerializer(prod1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def get_single_shop(request, shop_id):
    shop1 = Shop.objects.get(shop_id=shop_id)
    serializer = ShopSerializer(shop1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def get_shops(request):
    shop1 = Shop.objects.filter()
    serializer = ShopSerializer(shop1, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny, ])
def search_product_by_name(request, part_name):
    prods = Product.objects.filter(name__contains=part_name)
    serializer = ProductSerializer(prods, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

