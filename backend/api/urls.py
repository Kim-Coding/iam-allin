from django.urls import path

from . import views

urlpatterns = [
    path('<int:pk>/', views.DetailWinNumber.as_view()),
    path('<str:pk>/', views.DetailUsersNum.as_view())
]
