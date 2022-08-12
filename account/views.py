from wsgiref.util import request_uri
from django.shortcuts import render, get_object_or_404, redirect
from .models import BsSignupDetail
from django.utils import timezone
# Create your views here.

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')

def businessLogin(request):
    return render(request, 'bs-login.html')

def businessSignup(request):
    return render(request, 'bs-signup.html')

def businessSignupDetail(request):
    if request.method == 'POST':
        bs = BsSignupDetail()
        bs.tax = request.POST['tax']
        bs.bsNum = request.POST['bsNum']
        bs.type = request.POST['type']
        bs.bsName = request.POST['bsName']
        bs.repName = request.POST['repName']
        bs.birth = request.POST['birth']
        bs.phoneNum = request.POST['phoneNum']
        bs.address = request.POST['address']
        bs.registeration = request.FILES['registeration']
        bs.report = request.FILES['report']
        bs.save()
        print("성공")
        return redirect('/')
    else:
        return render(request, 'bs-signup-detail.html')