from django.http import JsonResponse, HttpResponse
from .models import UserCake
import json
from django.shortcuts import render, redirect, get_object_or_404

from cake.models import StoreOrder
# Create your views here.
def myPage(request):
    return render(request, "mypage1.html")

def myPage2(request):
    return render(request, "mypage2.html")

def myPage3(request):
    return render(request, "mypage3.html")

def myPage4(request):
    return render(request, "mypage4.html")

def myPage5(request):
    return render(request, "mypage5.html")

def myPage6(request):
    return render(request, "mypage6.html")

def myPage7(request):
    return render(request, "mypage7.html")

def userReview(request):
    print("리뷰")
    return render(request, "userreview.html")

def userChatting(request, order_id):
    print("역로감")
    order = get_object_or_404(StoreOrder, pk=order_id)
    return render(request, "user_chatting.html", {"order" : order})

def usercake(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        new_user_cake = UserCake()
        new_user_cake.user = request.user
        new_user_cake.cake_img = data
        new_user_cake.save();

        return redirect("/cake/order/"+str(new_user_cake.id))