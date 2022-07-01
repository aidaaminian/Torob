from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from Torob.views import CreateComplaint, get_shop_report, CreateShop, CreateShoppingDetail, add_complaint
from browse.views import get_shops
from .views import login, Logout, Register, UpdateUser, CreateProduct, get_user_details, add_product_to_favorites, \
    remove_product_from_favorites, add_product_to_recent_view, add_shopping_detail
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('login/', login),
    path('logout/', csrf_exempt(Logout.as_view())),
    path('register/', csrf_exempt(Register.as_view())),
    path('update/', csrf_exempt(UpdateUser.as_view())),
    path('addproduct/', csrf_exempt(CreateProduct.as_view())),
    path('addshop/', csrf_exempt(CreateShop.as_view())),
    path('addshoppingdetail/', add_shopping_detail),
    path('feedback/complaints/', add_complaint),
    path('reports/<int:shop_id>/', get_shop_report),
    path('profile/<str:username>/', get_user_details),
    path('shops/', get_shops),
    path('addfavorite/', add_product_to_favorites),
    path('addrecent/', add_product_to_recent_view),
    path('removefavorite/', remove_product_from_favorites),
]
