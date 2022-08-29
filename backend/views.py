from .models import NavBar, Img, Product, Case, Stack, Support, Team
from .serializers import NavBarSerializer, ImgSerializer, ProductSerializer, CaseSerializer, StackSerializer, SupportSerializer, TeamSerializer
from rest_framework import generics


class NavBarListCreate(generics.ListCreateAPIView):
    queryset = NavBar.objects.all()
    serializer_class = NavBarSerializer

class ImgListCreate(generics.ListCreateAPIView):
    queryset = Img.objects.all()
    serializer_class = ImgSerializer

class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CaseListCreate(generics.ListCreateAPIView):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
class StackListCreate(generics.ListCreateAPIView):
    queryset = Stack.objects.all()
    serializer_class = StackSerializer
class SupportListCreate(generics.ListCreateAPIView):
    queryset = Support.objects.all()
    serializer_class = SupportSerializer
class TeamListCreate(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
