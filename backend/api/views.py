from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework import generics
from .models import UsersNum, WinNumber
from .serializers import UsersNumSerializer, WinNumberSerializer

from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class DetailWinNumber(APIView):
    def get(self, request, pk):
        queryset = WinNumber.objects.filter(no=pk)
        serializer = WinNumberSerializer(queryset, many=True)
        return Response(serializer.data)


class DetailUsersNum(generics.RetrieveUpdateDestroyAPIView):
    def get(self, request, pk):
        queryset = UsersNum.objects.filter(email=pk)
        serializer = UsersNumSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request, pk):
        print(pk)
    
    def delete(self, request, pk):
        queryset = UsersNum.objects.filter(email=pk)
