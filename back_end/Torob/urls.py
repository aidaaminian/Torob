from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from .views import CreateComplaint

urlpatterns = [
    path('feedback/complaints/<str:complaint_type>', csrf_exempt(CreateComplaint.as_view())),
]
