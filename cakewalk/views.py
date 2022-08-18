from django.shortcuts import render
from account.models import BsSignupDetail
from store.models import StoreCake

def home(request):
    try:
        code = request.GET['code']
        status = "Y"
    except:
        code = 1
        status = "N"
    stores = BsSignupDetail.objects.all()
    cakes = StoreCake.objects.filter(code=code)
    return render(request, 'index.html', {'stores' : stores, 'cakes' : cakes, 'code' : code, "status" : status})