from django.db import models
from rest_framework import serializers


class mynumlist(models.Model):
    no = models.CharField(max_length=4)
    content = models.TextField()
    username = models.CharField(max_length=10, default='')

    def __str__(self):
        return f'[{self.pk}] {self.no} {self.content} {self.username}'
