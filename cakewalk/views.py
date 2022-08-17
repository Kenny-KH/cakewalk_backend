from django.shortcuts import render
from account.models import BsSignupDetail
from store.models import StoreCake

def home(request):
    stores = BsSignupDetail.objects.all()
    cakes = StoreCake.objects.all()
    return render(request, 'index.html', {'stores' : stores, 'cakes' : cakes})