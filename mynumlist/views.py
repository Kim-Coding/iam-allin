import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse
from django.shortcuts import render
from .models import mynumlist
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def num_list(request):
    user = request.user
    data = mynumlist.objects.filter(username=user)
    return render(request, '../templates/mynumlist.html', {'data':data})

@csrf_exempt
def plus(request):
    if request.method =='POST':
        user = request.user
        content = request.POST['num']
        page = requests.get("https://dhlottery.co.kr/common.do?method=main")
        lotto_count = int(BeautifulSoup(page.text, "html.parser").find('strong', {'id': 'lottoDrwNo'}).text)
        no = lotto_count+1
        mynumlist.objects.create(no=no, content=content, username=user)
    return HttpResponse(status=200)

@csrf_exempt
def delete(request):
    if request.method =='POST':
        num = request.POST['num']
        mynumlist.objects.filter(pk=num).delete()
    return HttpResponse(status=200)

