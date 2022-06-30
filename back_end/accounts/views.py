from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.generics import CreateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import User
from accounts.serializers import UserSerializer

login = obtain_auth_token


class Logout(APIView):
    """
    Delete user's authtoken
    """
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        request.user.auth_token.delete()
        return Response(data={'message': f"Bye {request.user.username}!"}, status=204)


class Register(CreateAPIView):
    """
    Create a new user
    """
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)


class UpdateUser(APIView):
    permission_classes = (IsAuthenticated,)

    def put(self, request, *args, **kwargs):
        user = get_object_or_404(User, username=request.data.username)
        user_serializer = UserSerializer(
            instance=user,
            data=request.data,
            partial=True
        )

        if user_serializer.is_valid():
            user_serializer.save()
            return Response({'message': 'User updated successfully!'}, status=200)

        return Response({'message': user_serializer.errors}, status=400)
