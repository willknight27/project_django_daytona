from django.shortcuts import render

def home(request):
    return render(request,'appDaytona/index.html')

def contacto(request):
    return render(request,'appDaytona/contacto.html')

def login(request):
    return render(request,'appDaytona/login.html')

def sign_up(request):
    return render(request,'appDaytona/sign_up.html')

#Detallles

def detalle1(request):
    return render(request,'appDaytona/detalle_trabajo/detalle_1.html')

def detalle2(request):
    return render(request,'appDaytona/detalle_trabajo/detalle_2.html')

def detalle3(request):
    return render(request,'appDaytona/detalle_trabajo/detalle_3.html')