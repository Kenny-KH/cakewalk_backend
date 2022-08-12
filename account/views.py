
from django.shortcuts import render, get_object_or_404, redirect
from .models import BsSignupDetail
from django.utils import timezone
from .models import User
from django.contrib import auth
from django.contrib import messages

# Create your views here.

def login(request):
    return render(request, 'login.html')

def signup(request):

    return render(request, 'signup.html')

def businessLogin(request):
    if request.method == 'POST':
        username = request.POST['email']
        password = request.POST['password']
        
        user = auth.authenticate(request, username = username, password = password)
        
        # 만약 유저가 있으면
        if user is not None:
            # 로그인하기
            auth.login(request,user)
            return redirect('/')
        else:
            return render(request, 'login.html', {'error' : "아이디 또는 비밀번호가 잘못됐습니다."})
        
    return render(request, 'business-login.html')

def businessSignup(request):
    if request.method == 'POST':
        business_num = request.POST['business_num']
        name = request.POST['name']
        tel = request.POST['tel']
        email = request.POST['email']
        if request.POST['password'] == request.POST['password2']:
            # user 객체를 생성
            user = User.objects.create_superuser(business_num, name, tel, email, password = request.POST['password'])
            auth.login(request, user)
            return redirect('/account/business-signup-detail/')
        else:
            messages.warning(request, "권한이 없습니다.")
    return render(request, 'business-signup.html')

def logout(request):
    auth.logout(request)
    return redirect('/')

def businessSignupDetail(request):
    if request.method == 'POST':
        bs = BsSignupDetail()
        bs.author = request.user
        bs.tax = request.POST['tax']
        bs.bsNum = request.POST['bsNum']
        bs.type = request.POST['type']
        bs.bsName = request.POST['bsName']
        bs.repName = request.POST['repName']
        bs.birth = request.POST['birth']
        bs.insta = request.POST['insta']
        bs.phoneNum = request.POST['phoneNum']
        bs.address = request.POST['address']
        bs.registeration = request.FILES['registeration']
        bs.report = request.FILES['report']
        bs.save()
        print("성공")
        return redirect('/')
    else:
        return render(request, 'business-signup-detail.html')