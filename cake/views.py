from copyreg import add_extension
from django.shortcuts import render, redirect, get_object_or_404
from account.models import BsSignupDetail
from cake.models import StoreOrder
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
        order = StoreOrder()
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
        order.cake = cake.image
        order.size = request.POST['size']
        order.flavor = request.POST['flavor']
        order.cakeObject = cake
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
        return redirect('/cake/payment/' + str(order_id))
    return render(request, 'order.html', {'stores' : stores, 'order_id' : order_id, 'cake' : cake})
"""
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
"""

def payment(request, order_id):
    order = get_object_or_404(StoreOrder, pk=order_id)
    return render(request, 'payment.html', {"order" : order})

def watch_cake(request):
    cakes = StoreCake.objects.all()
    return render(request, 'watch_cake.html', {"cakes" : cakes})
