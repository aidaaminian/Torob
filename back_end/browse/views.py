from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from Torob.models import Product
from browse.serializers import ProductSerializer


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

