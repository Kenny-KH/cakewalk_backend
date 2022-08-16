from store.models import StoreCake
from django.shortcuts import render, get_object_or_404, redirect


# Create your views here.
def make(request):
    return render(request, 'make.html')

def order(request):
    if request.method("POST"):
        order = order()
        order.mapSearch = request.POST["mapSearch"]
        order.orderDate = request.POST["orderDate"]
        order.cakeImg = request.POST["cakeImg"]
        order.cakeSize = request.POST["cakeTaste"]
        order.addOptions = request.POST["addOptions"]
        order.cakeRequest = request.POST["cakeRequest"]
        order.save()
        return redirect('/')
    else:
        return render(request, 'order.html')

def payment(request):
    return render(request, 'payment.html')

def watch_cake(request):
    cakes = StoreCake.objects.all()
    return render(request, 'watch_cake.html', {"cakes" : cakes})
