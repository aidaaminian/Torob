from django.urls import path
from .views import get_products, get_single_product, get_single_shop, search_product_by_name

urlpatterns = [
    path('browse/<str:head>/<str:category>/<str:sub_category>/', get_products),
    path('products/<int:product_id>/', get_single_product),
    path('shops/<int:shop_id>/', get_single_shop),
    path('search/', search_product_by_name),
]
