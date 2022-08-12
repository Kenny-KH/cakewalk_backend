from wsgiref.util import request_uri
from django.shortcuts import render, get_object_or_404, redirect
from .models import Store
from django.utils import timezone
# Create your views here.

def store(request):
    store = Store.objects
    return render(request, 'business-sighnup.html', {'store': store})

def create(request):
    if request.method == 'POST':
        store = Store()
        store.tax = request.POST['tax']
        store.businessNum = request.POST['businessNum']
        store.type = request.POST['type']
        store.bsName = request.POST['bsName']
        store.repName = request.POST['repName']
        store.birth = request.POST['birth']
        store.phoneNum = request.POST['phoneNum']
        store.address = request.POST['address']
        store.registeration = request.POST['registeration']
        store.report = request.POST['report']
        store.save()
        print("제발되라")
    else:
        return render(request, 'business-signup-detail.html')

