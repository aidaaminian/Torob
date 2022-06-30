from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from .views import CreateComplaint, get_shop_report

urlpatterns = [
    path('feedback/complaints', csrf_exempt(CreateComplaint.as_view())),
    path('reports/<int:shop_id>', get_shop_report),
]
