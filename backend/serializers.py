from rest_framework import serializers
from .models import NavBar, Img

class NavBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavBar
        fields = ('id', 'navName')

class ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Img
        fields = ('id', 'imgName', 'imgimg')