from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from Torob.models import Complaint
from Torob.serializers import ComplaintSerializer, ShopSerializer


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


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def get_shop_report(request, shop_id):
    comps = Complaint.objects.filter(shop_id=shop_id)
    serializer = ComplaintSerializer(comps, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
