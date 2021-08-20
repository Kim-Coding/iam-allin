from django.shortcuts import render
from makenum import makenum
from django.views.decorators.csrf import csrf_exempt
from bs4 import BeautifulSoup
import requests

@csrf_exempt
def index(request):
    result = []
    exist = []

    page = requests.get("https://dhlottery.co.kr/common.do?method=main")
    lotto_count = int(BeautifulSoup(page.text, "html.parser").find('strong', {'id': 'lottoDrwNo'}).text)
    recent_num = []
    for num in range(1, 7):
        recent_num.append(requests.get(f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={lotto_count}").json())

    for num in range(lotto_count, lotto_count-10, -1):
        data = requests.get(f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={num}").json()
        for i in range(1, 7):
            exist.append(data.get(f'drwtNo{i}'))

    if request.method == 'POST':
        request_num = request.POST['howmany']
        if request_num=='' or int(request_num)<0:
            return render(request, '../templates/mainpage.html', {'result': result})
        elif int(request_num)>10:
            n = 10
        else:
            n = int(request_num)

        result = makenum(exist, n, recent_num)
    return render(request, '../templates/mainpage.html', {'result':result})