from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from .views import login, Logout, Register, UpdateUser
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('login/', login),
    path('logout/', csrf_exempt(Logout.as_view())),
    path('register/', csrf_exempt(Register.as_view())),
    path('update/', csrf_exempt(UpdateUser.as_view())),
]
