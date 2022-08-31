from rest_framework import serializers
from .models import NavBar, Img, Product, Case, Stack, Support, Team


class NavBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavBar
        fields = ('id', 'navName')


class ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Img
        fields = ('id', 'imgName', 'imgimg')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title','image','text')

class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = ('id', 'logo','image','text')

class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = ('id', 'text', 'case')
class SupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Support
        fields = ('id', 'logo')

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name','image','role')