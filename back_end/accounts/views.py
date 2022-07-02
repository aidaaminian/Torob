from rest_framework import status
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import CreateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Torob.models import Product, Shop, ShoppingDetail
from accounts.models import User
from accounts.serializers import UserSerializer
from browse.serializers import ProductSerializer, ShoppingDetailSerializer

login = obtain_auth_token


class Logout(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        request.user.auth_token.delete()
        return Response(data={'message': f"Bye {request.user.username}!"}, status=204)


class Register(CreateAPIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({'message': serializer.errors}, status=400)


class UpdateUser(APIView):
    permission_classes = (IsAuthenticated,)

    def put(self, request, *args, **kwargs):
        for key, value in request.data.items():
            print(key, value)
        print("request.data.username " + request.data["username"])
        user = get_object_or_404(User, username=request.data["username"])
        print("user_id ", user.id)
        print("favorites ", user.favorites)
        user_serializer = UserSerializer(
            instance=user,
            data=request.data,
            partial=True
        )

        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data, status=200)

        return Response({'message': user_serializer.errors}, status=400)


class CreateProduct(CreateAPIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({'message': serializer.errors}, status=400)


@api_view(['GET'])
@permission_classes([AllowAny, ])
def get_user_details(request, username):
    user1 = User.objects.get(username=username)
    serializer = UserSerializer(user1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny, ])
def add_product_to_favorites(request):
    user1 = User.objects.get(username=request.data['username'])
    prod1 = Product.objects.get(product_id=request.data['product_id'])
    user1.favorites.add(prod1)
    serializer = UserSerializer(user1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def remove_product_from_favorites(request):
    user1 = User.objects.get(username=request.data['username'])
    prod1 = Product.objects.get(product_id=request.data['product_id'])
    user1.favorites.remove(prod1)
    serializer = UserSerializer(user1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny, ])
def add_product_to_recent_view(request):
    user1 = User.objects.get(username=request.data['username'])
    prod1 = Product.objects.get(product_id=request.data['product_id'])
    user1.recent_views.add(prod1)
    serializer = UserSerializer(user1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def add_shopping_detail(request):
    shop1 = Shop.objects.get(shop_id=request.data['shop_id'])
    prod1 = Product.objects.get(product_id=request.data['product_id'])
    shop_detail1 = ShoppingDetail.objects.create(shop=shop1, product=prod1, price=request.data['price'])
    serializer = ShoppingDetailSerializer(shop_detail1, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)
