from django.db import models

# Create your models here.
class WinNumber(models.Model):
    no = models.CharField(max_length=4, default='')
    content = models.TextField()

    def __str__(self):
        return f'[{self.no}회 / {self.content} / {self.id}]'

class UsersNum(models.Model):
    email = models.CharField(max_length=100)
    numlist = models.TextField()

    def __str__(self):
        return f'id : {self.email} / num : {self.numlist}'