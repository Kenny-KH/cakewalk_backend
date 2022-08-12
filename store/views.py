from wsgiref.util import request_uri
from django.shortcuts import render, get_object_or_404, redirect
from account.models import BsSignupDetail
from django.utils import timezone
# Create your views here.

def manage1(request):
    return render(request,'manage1.html')

def manageStore(request):
    user = request.user
    store = get_object_or_404(BsSignupDetail, author=user)
    if request.method == 'POST':
        store.notice = request.POST['notice']
        store.save()
    return render(request,'manage_store.html', {'notice' : store.notice})

def manage6(request):
    return render(request,'manage6.html')

def detail(request):
    return render(request,'store_info.html')


