from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from Torob.models import Product
from browse.serializers import ProductSerializer


@api_view(['GET'])
def get_products(request, head, category, sub_category):
    prods = Product.objects.filter(head=head, category=category, sub_category=sub_category)
    serializer = ProductSerializer(prods, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
