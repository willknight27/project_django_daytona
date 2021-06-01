from django.urls import path
from .views import contacto, detalle1, detalle2, detalle3, home, login, sign_up

urlpatterns = [
    path('',home,name='home'),
    path('contacto/',contacto,name='contacto'),
    path('ingresar/',login,name='login'),
    path('registro/',sign_up,name='sign_up'),
    path('detalle1/',detalle1,name='detalle1'),
    path('detalle2/',detalle2,name='detalle2'),
    path('detalle3/',detalle3,name='detalle3'),

]