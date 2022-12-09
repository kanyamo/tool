from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """アプリ全体で使うユーザーモデル 一部アプリはログインを要する"""

    class Meta:
        verbose_name = "ユーザー"
        verbose_name_plural = "ユーザー"
    
    # usernameとemailはすでにAbstractUserで定義済み,passwordはすでにAbstractBaseUserで定義済み
