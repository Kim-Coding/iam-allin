from rest_framework import serializers
from .models import Winnum

class WinnumSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'no',
            'content',
        )
        model = Winnum