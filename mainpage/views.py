from django.shortcuts import render
from django.db.models import Max
from .models import numlists
import random
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    result = []
    if request.method == 'POST':
        lotto_count = int(numlists.objects.aggregate(no=Max('no'))['no'])
        exist = []
        for drwno in range(lotto_count, lotto_count - 5, -1):
            exist.extend(list(map(int, numlists.objects.get(no=drwno).content.split())))
        notexist = list(x for x in range(1,46) if x not in exist)
        exist = list(set(exist))
        n=0
        if request.POST['howmany']=='' or int(request.POST['howmany'])<0:
            n = 0
        elif int(request.POST['howmany'])>10:
            n = 10
        else:
            n = int(request.POST['howmany'])
        i = 0
        while i < n:
            temp = sorted(random.sample(notexist, 4) + random.sample(exist, 2))
            if 80 < sum(temp) and sum(temp) < 221:
                count_overlap = 0
                for num in temp:
                    if num in list(map(int, numlists.objects.get(no=lotto_count).content.split())):
                        count_overlap += 1
                if count_overlap > 1:
                    continue
                else:
                    result.append(temp)
                    i += 1
            else:
                pass
    return render(request, '../templates/mainpage.html', {'result':result})