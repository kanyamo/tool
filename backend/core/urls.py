from django.urls import path
from notification.views import NotificationListAPIView

urlpatterns = [
    path('notifications/', NotificationListAPIView.as_view(), name='notification_list'),
]