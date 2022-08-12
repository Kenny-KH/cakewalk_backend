from wsgiref.util import request_uri
from django.shortcuts import render, get_object_or_404, redirect
from .models import Store
from django.utils import timezone
# Create your views here.

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')

def businessLogin(request):
    return render(request, 'business-login.html')

def businessSignup(request):
    return render(request, 'business-signup.html')

def businessSignupDetail(request):
    return render(request, 'business-signup-detail.html')