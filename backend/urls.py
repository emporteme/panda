from django.urls import path
from . import views

urlpatterns = [
    path('api/navbar/', views.NavBarListCreate.as_view() ),
    path('api/img/', views.ImgListCreate.as_view() ),
    path('api/product/', views.ProductListCreate.as_view() ),
    path('api/case/', views.CaseListCreate.as_view() ),
    path('api/stack/', views.StackListCreate.as_view() ),
    path('api/support/', views.SupportListCreate.as_view() ),
    path('api/team/', views.TeamListCreate.as_view() ),
]

#ImgListCreate
#<div className="cases__card-stack-block">{stack}</div>