from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from Torob.models import Complaint, Shop, Product
from Torob.serializers import ComplaintSerializer, ShopSerializer
from accounts.models import User
from browse.serializers import ShoppingDetailSerializer


class CreateComplaint(CreateAPIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = ComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({'message': serializer.errors}, status=400)


class CreateShop(CreateAPIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = ShopSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({'message': serializer.errors}, status=400)


class CreateShoppingDetail(CreateAPIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = ShoppingDetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({'message': serializer.errors}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def get_shop_report(request, shop_id):
    comps = Complaint.objects.filter(shop__shop_id=shop_id)
    serializer = ComplaintSerializer(comps, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def add_complaint(request):
    shop1 = Shop.objects.get(shop_id=request.data['shop_id'])
    prod1 = Product.objects.get(product_id=request.data['product_id'])
    user1 = User.objects.get(username=request.data['username'])
    comp1 = Complaint.objects.create(shop=shop1, product=prod1, user=user1, description=request.data['description'])
    serializer = ComplaintSerializer(comp1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)
