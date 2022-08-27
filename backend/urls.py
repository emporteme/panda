from django.urls import path
from . import views

urlpatterns = [
    path('api/navbar/', views.NavBarListCreate.as_view() ),
    path('api/img/', views.ImgListCreate.as_view() ),
]

#ImgListCreate