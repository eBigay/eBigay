from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db.models import Q
from .models import Product, Novel, Author
from .form import CreateUser, CreateProduct
from django.conf import settings
import random


def generate_otp():
    code = random.randint(111111, 999999)
    return code


otp = generate_otp()


def send_email(username, address):
    msg = f'''Hi {username}
    Yor OTP Code is {otp}'''
    mail = send_mail(
        'OTP Code for verification',
        msg,
        settings.EMAIL_HOST_USER,
        [address],
        fail_silently=False,
    )


login_field = {}


def signin_otp(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            email = request.POST.get('email')
            send_email(username, email)
            global login_field
            login_field = {'username': username, 'email': email}
            return redirect('otp')
    return render(request, 'login/signin_otp.html')


def validate_otp(request):
    global otp
    otp1 = request.POST.get('OTP')
    if str(otp1).isnumeric():
        if str(otp) == str(otp1):
            return redirect('signup')
        else:
            messages.error(request, 'Wrong OTP')
            pass
    else:
        pass
    return render(request, 'login/otp.html')


@login_required(login_url='signin')
def home(request):
    users = User.objects.all()
    if 'search' in request.GET:
        search = request.GET['search']
        multiple = Q(Q(product__icontains=search) | Q(description__icontains=search) | Q(user__username__icontains=search))
        product = Product.objects.filter(multiple)
    else:
        product = Product.objects.all()
    return render(request, 'Home.html', {'product': product, 'users': users})


def signup(request):
    global login_field
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUser()
        if request.method == 'POST':
            form = CreateUser(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, f'Account created successfully for {user}')
                return redirect('signin')

        context = {'form': form}
        return render(request, 'login/SignUp.html', context)


def signin(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username or Password is incorrect')

    context = {}
    return render(request, 'login/SignIn.html', context)


def logout_user(request):
    logout(request)
    return redirect('signin')


def add_product(request):
    form = CreateProduct()
    if request.method == 'POST':
        form = CreateProduct(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    context = {'product': form}
    return render(request, 'product/new_product.html', context)


def update_product(request, pk):
    instance = Product.objects.get(id=pk)
    form = CreateProduct(instance=instance)
    if request.method == 'POST':
        form = CreateProduct(request.POST, instance=instance)
        if form.is_valid():
            form.save()
            return redirect('home')
    context = {'product': form}
    return render(request, 'product/new_product.html', context)


def delete_product(request, pk):
    product = Product.objects.get(id=pk)
    if request.method == 'POST':
        product.delete()
        return redirect('home')
    context = {'product': product}
    return render(request, 'product/delete_product.html', context)


def authors(request):
    if 'search' in request.GET:
        search = request.GET['search']
        author = Author.objects.filter(author__icontains=search)
    else:
        author = Author.objects.all()
    context = {'author': author}
    return render(request, 'books/author.html', context)


def novels(request, pk):
    author = Author.objects.get(id=pk)
    if 'search' in request.GET:
        search = request.GET['search']
        multiple = Q(Q(name__icontains=search) | Q(description__icontains=search))
        novel = Novel.objects.filter(multiple)
    else:
        novel = Novel.objects.all()
    context = {'novel': novel, 'author': author}
    return render(request, 'books/novel.html', context)


