from cakewalk.settings.base import *
from django.http import JsonResponse, HttpResponse
from .models import UserCake
import json
from django.shortcuts import render, redirect, get_object_or_404
import base64
from django.core.files.base import ContentFile
from cake.models import Order


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
    order = get_object_or_404(Order, pk=order_id)
    return render(request, "user_chatting.html", {"order" : order})

def usercake(request):
    if request.method == 'POST':
        new_user_cake = UserCake()
        new_user_cake.user = request.user
        new_user_cake.name = f"${request.user.name}님이 제작한 케이크"
        new_user_cake.save();

        cake_data = json.loads(request.body)

        image_string = cake_data['cake_img']
        
        # base64 인코딩
        header, data = image_string.split(';base64,')
        data_format, ext = header.split('/')

        image_data = base64.b64decode(data)
        image_root = MEDIA_ROOT + '/' + "cake" + str(new_user_cake.id) + "." + ext
        print(MEDIA_ROOT)
        with open(image_root, 'wb') as f:
            f.write(image_data)
        cake = get_object_or_404(UserCake, pk = new_user_cake.id)
        cake.image = "cake" + str(new_user_cake.id) + "." + ext
        cake.save()
        

        return JsonResponse({"id" : new_user_cake.id})