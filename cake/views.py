from copyreg import add_extension
from django.shortcuts import render, redirect, get_object_or_404
from account.models import BsSignupDetail
from cake.models import Order
from store.models import StoreCake
from user.models import UserCake
from datetime import datetime
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def make(request):
    return render(request, 'make.html')

@login_required
def order(request , whatCake, cake_id):
    
    if whatCake == "store":
        stores = get_object_or_404(StoreCake, pk = cake_id).store
        cake = get_object_or_404(StoreCake, pk=cake_id)
    else:
        stores = BsSignupDetail.objects.all()
        cake = get_object_or_404(UserCake, pk=cake_id)
    result = ""
    
    if request.method == 'POST':
        order = Order()
        order.user = request.user
        order.store = stores if whatCake == "store" \
                             else get_object_or_404(BsSignupDetail, pk = request.POST['store'])
        order.cake = cake.image
        
        if whatCake == "user":
            order.price = cake.price
        else:
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
        order.size = request.POST['size']
        order.flavor = request.POST['flavor']
        order.store
        try:
            candle = request.POST["number"]
            result  = result + "초 " + 1 + "개" + "\n"
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
        return redirect('/user/user_chatting/' + str(order.id))
    return render(request, 'order.html', {'stores' : stores, 'cake_id' : cake_id, 'cake' : cake ,'whatCake' : whatCake})
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

@login_required
def payment(request, order_id):
    order = get_object_or_404(Order, pk=order_id)
    return render(request, 'payment.html', {"order" : order})

def watch_cake(request):
    cakes = StoreCake.objects.all()
    return render(request, 'watch_cake.html', {"cakes" : cakes})

