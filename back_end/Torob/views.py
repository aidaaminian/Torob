from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from Torob.serializers import ComplaintSerializer


class CreateComplaint(CreateAPIView):
    # permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = ComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({'message': serializer.errors}, status=400)
