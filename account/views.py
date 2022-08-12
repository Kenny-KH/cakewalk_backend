from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')

def businessLogin(request):
    return render(request, 'business-login.html')

def businessSignup(request):
    return render(request, 'business-signup')

def businessSignupDetail(request):
    return render(request, 'business-signup-detail.html')