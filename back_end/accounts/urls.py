from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from Torob.views import CreateComplaint, get_shop_report
from .views import login, Logout, Register, UpdateUser, CreateProduct
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('login/', login),
    path('logout/', csrf_exempt(Logout.as_view())),
    path('register/', csrf_exempt(Register.as_view())),
    path('update/', csrf_exempt(UpdateUser.as_view())),
    path('addproduct/', csrf_exempt(CreateProduct.as_view())),
    path('feedback/complaints/', csrf_exempt(CreateComplaint.as_view())),
    path('reports/<int:shop_id>/', get_shop_report),
]
