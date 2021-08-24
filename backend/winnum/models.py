from django.db import models

# Create your models here.
class Winnum(models.Model):
    no = models.CharField(max_length=4, default='')
    content = models.TextField()

    def __str__(self):
        return f'[{self.no}회 / {self.content}]'