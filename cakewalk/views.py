from django.shortcuts import render
from account.models import BsSignupDetail
from store.models import StoreCake

def home(request):
    try:
        code = request.GET['code']
    except:
        code = 1
    stores = BsSignupDetail.objects.all()
    cakes = StoreCake.objects.filter(code=code)
    return render(request, 'index.html', {'stores' : stores, 'cakes' : cakes, 'code' : code})