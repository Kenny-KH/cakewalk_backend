from django.shortcuts import render
from store.models import StoreCake
# Create your views here.
def make(request):
    return render(request, 'make.html')

def order(request):
    return render(request, 'order.html')

def payment(request):
    return render(request, 'payment.html')

def watch_cake(request):
    cakes = StoreCake.objects.all()
    return render(request, 'watch_cake.html', {"cakes" : cakes})
