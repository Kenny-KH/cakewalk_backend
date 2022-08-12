from wsgiref.util import request_uri
from django.shortcuts import render, get_object_or_404, redirect
from .models import Store
from django.utils import timezone
# Create your views here.

def manage1(request):
    return render(request,'manage1.html')

def manage2(request):
    return render(request,'manage2.html')

def manage6(request):
    return render(request,'manage6.html')

def detail(request):
    return render(request,'store_info.html')


