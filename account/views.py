from django.shortcuts import render, get_object_or_404, redirect
from .models import BsSignupDetail, User
from .models import User
from django.contrib import auth
from django.contrib import messages

#카카오 로그인 모듈
import requests
from django.conf import settings
from django.http import HttpResponse

def login(request):
    return render(request, 'login.html')

def signup(request):
    
    if request.method == 'POST':
        name = request.POST['name']
        tel = request.POST['tel']
        email = request.POST['email']
        address = request.POST['address']
        user = User.objects.create_user(email, name, tel, address, None, None, None)

        auth.login(request, user)
        return redirect('/')

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
        bs.phoneNum = request.POST['phoneNum']
        bs.address = request.POST['address']
        bs.registeration = request.FILES['registeration']
        bs.report = request.FILES['report']
        bs.save()
        print("성공")
        return redirect('/')
    else:
        return render(request, 'business-signup-detail.html')


kakao_login_uri = "https://kauth.kakao.com/oauth/authorize"
kakao_token_uri = "https://kauth.kakao.com/oauth/token"
kakao_profile_uri = "https://kapi.kakao.com/v2/user/me"

def kakaoLogin(request):
    client_id = settings.KAKAO_CONFIG['KAKAO_REST_API_KEY']
    redirect_uri = settings.KAKAO_CONFIG['KAKAO_REDIRECT_URI']
    uri = f"{kakao_login_uri}?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    
    res = redirect(uri)
    print("여기에요 살려주시라요")
    return res

def kakaocallback(request):
    # access_token 발급 요청
    code = request.GET["code"]
    if not code:
        return HttpResponse("없엉")

    request_data = {
        'grant_type': 'authorization_code',
        'client_id': settings.KAKAO_CONFIG['KAKAO_REST_API_KEY'],
        'redirect_uri': settings.KAKAO_CONFIG['KAKAO_REDIRECT_URI'],
        'client_secret': settings.KAKAO_CONFIG['KAKAO_CLIENT_SECRET_KEY'],
        'code': code,
    }
    token_headers = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    token_res = requests.post(kakao_token_uri, data=request_data, headers=token_headers)

    token_json = token_res.json()
    access_token = token_json.get('access_token')

    if not access_token:
        return HttpResponse("없엉")
    access_token = f"Bearer {access_token}"  # 'Bearer ' 마지막 띄어쓰기 필수

    # kakao 회원정보 요청
    auth_headers = {
        "Authorization": access_token,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    }
    user_info_res = requests.get(kakao_profile_uri, headers=auth_headers)
    user_info_json = user_info_res.json()
    user_info_json_id = user_info_json.get('id')

    social_type = 'kakao'
    social_id = f"{social_type}_{user_info_json_id}"

    kakao_account = user_info_json.get('kakao_account')
    
    if not kakao_account:
        return HttpResponse("없엉")

    user_email = kakao_account.get('email')

    #is_business가 no임을 체크해야해
    try:
        checked_user = User.objects.get(email=user_email)
        print(checked_user)
    except:
        print("여기가 진행 된거지??")
        return render(request, 'signup.html', {'kakao_email':user_email})
    else:
        auth.login(request, checked_user)
        return redirect('/')