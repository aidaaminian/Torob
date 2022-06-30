from django.urls import path
from .views import get_products

urlpatterns = [
    path('<str:head>/<str:category>/<str:sub_category>', get_products),
]
