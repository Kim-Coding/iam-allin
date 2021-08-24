from django.db.models.query import QuerySet
from django.shortcuts import render
from .models import Winnum
from .serializers import  WinnumSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class ResultWinnum(APIView):
    def get(self, request):
        queryset = Winnum.objects.all()[:10]
        serializer = WinnumSerializer(queryset, many=True)
        return Response(serializer.data)