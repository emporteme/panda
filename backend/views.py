from .models import NavBar, Img
from .serializers import NavBarSerializer, ImgSerializer
from rest_framework import generics

class NavBarListCreate(generics.ListCreateAPIView):
    queryset = NavBar.objects.all()
    serializer_class = NavBarSerializer

class ImgListCreate(generics.ListCreateAPIView):
    queryset = Img.objects.all()
    serializer_class = ImgSerializer