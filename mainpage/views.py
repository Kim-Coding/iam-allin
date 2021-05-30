from django.shortcuts import render
from django.db.models import Max
from .models import numlists
from makenum import makenum
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    result = []
    if request.method == 'POST':
        if request.POST['howmany']=='' or int(request.POST['howmany'])<0:
            return render(request, '../templates/mainpage.html', {'result': result})
        elif int(request.POST['howmany'])>10:
            n = 10
        else:
            n = int(request.POST['howmany'])

        lotto_count = int(numlists.objects.aggregate(no=Max('no'))['no'])
        lotto_count_num = list(map(int, numlists.objects.get(no=lotto_count).content.split()))

        exist = []
        for drwno in range(lotto_count, lotto_count - 15, -1):
            exist.extend(list(map(int, numlists.objects.get(no=drwno).content.split())))
        exist = list(set(exist))

        result = makenum(exist, n, lotto_count_num)

    return render(request, '../templates/mainpage.html', {'result':result})