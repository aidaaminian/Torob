from django.urls import path
from .views import get_products, get_single_product, get_single_shop, search_product_by_name, get_category_products, \
    get_head_products

urlpatterns = [
    path('browse/<str:head>/<str:category>/<str:sub_category>/', get_products),
    path('browse/<str:head>/<str:category>/', get_category_products),
    path('browse/<str:head>/', get_head_products),
    path('products/<int:product_id>/', get_single_product),
    path('shops/<int:shop_id>/', get_single_shop),
    path('search/<str:part_name>/', search_product_by_name),
]
