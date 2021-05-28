from django.urls import path

from . import views

urlpatterns = [
    path('', views.num_list),
    path('plus/', views.plus),
    path('delete/', views.delete)
]

