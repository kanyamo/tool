from django.db import models
from django.utils import timezone

# Create your models here.

class Notification(models.Model):
    class Meta:
        verbose_name = "通知"
        verbose_name_plural = "通知"
    
    title = models.CharField("タイトル", max_length=200, blank=False)
    content = models.TextField("内容", max_length=400)
    pub_date = models.DateTimeField("通知日時", default=timezone.now)

    def __str__(self):
        return self.title