from copyreg import add_extension
from django.shortcuts import render, redirect, get_object_or_404
from account.models import BsSignupDetail
from cake.models import Order, Store
from store.models import StoreCake
from datetime import datetime
# Create your views here.
def make(request):
    return render(request, 'make.html')

def order(request, order_id):
    stores = BsSignupDetail.objects.all()
    cake = get_object_or_404(StoreCake, pk=order_id)
    result = ""
    if request.method == 'POST':
        order = Order()
        order.cake = cake.image
        if request.POST['size'] == "미니":
            order.price = cake.price_mini
            
        elif request.POST['size'] == "1호":
            order.price = cake.price_1

        elif request.POST['size'] == "2호":
            order.price = cake.price_2
            
        elif request.POST['size'] == "3호":
            order.price = cake.price_3
                                    
        order.address = request.POST['address']
        order.date = datetime.today().strftime("%m월%d일")
        order.cake = request.FILES['image']
        order.size = request.POST['size']
        order.flavor = request.POST['flavor']
        try:
            result  = result + "초 " + request.POST["number"] + "개" + "\n"
        except:
            pass
        try:
            result += request.POST['ballon'] + "\n"
        except:
            pass
        
        try:
            result += request.POST['ice'] + "\n"
        except:
            pass
        
        try:
            order.require = request.POST["require"]
        except:
            order.require = ""
        order.additional  = result
        order.save()
        return redirect('/cake/payment')
    return render(request, 'order.html', {'stores' : stores, 'order_id' : order_id})

def payment(request):
    return render(request, 'payment.html')

def watch_cake(request):
    cakes = StoreCake.objects.all()
    return render(request, 'watch_cake.html', {"cakes" : cakes})
