from django.db import models

class Todo(models.Model):

    class Meta:
        verbose_name = "Todo"
        verbose_name_plural = "Todos"
    

    title = models.CharField("タイトル", max_length=200)
    description = models.TextField("説明", max_length=1000)
    completed = models.BooleanField("完了したかどうか", default=False)

    def __str__(self):
        return self.title
