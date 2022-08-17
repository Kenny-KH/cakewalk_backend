from .models import StoreCake
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from account.models import BsSignupDetail
# Create your views here.

def manage(request):
    return render(request,'manage.html')


def manageStore(request):
    user = request.user
    store = get_object_or_404(BsSignupDetail, author=user)
    store_cake = StoreCake() 
    print("여기로")
    if request.method == 'POST':
        print("뜰어옴")
        store.notice = request.POST['notice']
        store_cake.store = user
        store_cake.name = request.POST['name']
        if 'sizemini' in request.POST:
            store_cake.price_mini = request.POST['price_mini']
            
        if 'size1' in request.POST:
            store_cake.price_1 = request.POST['price_1']
            
        if 'size2' in request.POST:
            store_cake.price_2 = request.POST['price_2']
            
        if 'size3' in request.POST:
            store_cake.price_3 = request.POST['price_3']                                    
        store_cake.image = request.FILES['image']
        store.save()
        store_cake.save()
        messages.add_message(request, messages.SUCCESS,'성공적으로 수정 완료 되었습니다!')
        print("뜰어옴")
    return render(request,'manage_store.html', )

def manageStoreBefore(request):
    return render(request,'manage_store_before.html', )
def manage3(request):
    return render(request,'manage3.html')

def manage4(request):
    return render(request,'manage4.html')

def manage5(request):
    return render(request,'manage5.html')

def manage6_before(request):
    return render(request,'manage6_before.html')

def manage6(request):
    return render(request,'manage6.html')

def manage7(request):
    return render(request,'manage7.html') 

def detail(request, store_id):
    store = get_object_or_404(BsSignupDetail, pk=store_id)
    cakes = StoreCake.objects.filter(store=store.pk)
    
    return render(request,'store_info.html', {'store' : store, 'cakes' : cakes})

def inquire(request):
    return render(request,'inquire.html')

def manageChatting(request):
    return render(request,'manage_chatting.html') 

def storeInfo(request):
    return render(request,'store_info.html') 

def storeInfoMore(request):
    return render(request,'store_info_more.html') 


def watchStore(request):
    stores = BsSignupDetail.objects.all()
   

    return render(request, 'watch_store.html', {"stores" : stores})

