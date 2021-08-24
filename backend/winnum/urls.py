from django.urls import path

from . import views

urlpatterns = [
    path('', views.ResultWinnum.as_view()),

]