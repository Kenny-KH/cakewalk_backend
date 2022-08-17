from django.shortcuts import render

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
    return render(request, "userreview.html")

def userChatting(request):
    return render(request, "user_chatting.html")
