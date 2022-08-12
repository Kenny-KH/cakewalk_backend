from django.shortcuts import render

# Create your views here.
def make(request):
    return render(request, 'make.html')

def order(request):
    return render(request, 'order.html')

def payment(request):
    return render(request, 'payment.html')

def watch_cake(request):
    return render(request, 'watch_cake.html')