from rest_framework import serializers
from .models import UsersNum, WinNumber

class WinNumberSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'no',
            'content',
        )
        model = WinNumber

class UsersNumSerializer(serializers.ModelSerializer):
    class Meta:
        fieds = (
            'email',
            'numlist',
        )
        model = UsersNum