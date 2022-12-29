from rest_framework import generics
from .models import Notification
from .serializers import NotificationSerializer

class NotificationListAPIView(generics.ListAPIView):

    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
