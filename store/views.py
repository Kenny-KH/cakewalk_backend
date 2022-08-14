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
    if request.method == 'POST':
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
    
        return redirect('/store/manage_store')
    return render(request,'manage_store.html', {'notice' : store.notice})

def manage6(request):
    return render(request,'manage6.html')

def detail(request, store_id):
    store = get_object_or_404(BsSignupDetail, pk=store_id)
    cakes = StoreCake.objects.filter(store=store.author)
    
    return render(request,'store_info.html', {'store' : store, 'cakes' : cakes})

def inquire(request):
    return render(request,'inquire.html')