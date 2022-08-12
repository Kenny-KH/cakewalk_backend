from wsgiref.util import request_uri
from django.shortcuts import render, get_object_or_404, redirect
from .models import Store
from django.utils import timezone
# Create your views here.

def managePage(request):
    return render(request,'manage_page.html')

