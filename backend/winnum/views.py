from rest_framework.views import APIView
from rest_framework.response import Response

import requests
import datetime
import json
import math

recentNo = math.ceil((datetime.datetime.now()-datetime.datetime(2002,12,7)).days/7)
print(recentNo)
arr = {}

for i in range(recentNo, recentNo-10, -1):
    res = requests.get(f'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={i}').json()
    arr[str(i)] = [res.get('drwtNo1'),res.get('drwtNo2'),res.get('drwtNo3'),res.get('drwtNo4'),res.get('drwtNo5'),res.get('drwtNo6')]

# Create your views here.
class ResultWinnum(APIView):
    def get(self, request):
        return Response(json.dumps(arr))