from django.db import models


class NavBar(models.Model):
    navName = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)


class Img(models.Model):
    imgName = models.CharField(max_length=100)
    imgimg = models.ImageField(
        ("Image"), upload_to='None', blank=True, default='default.jpg')
    created_at = models.DateTimeField(auto_now_add=True)


class Product(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(
        ("Image"), upload_to='None', blank=True, default='default.jpg')
    text = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)


class Case(models.Model):
    logo = models.ImageField(
        ("Image"), upload_to='None', blank=True, default='default.jpg')
    image = models.ImageField(
        ("Image"), upload_to='None', blank=True, default='default.jpg')
    text = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)


class Stack(models.Model):
    case = models.ForeignKey(Case,
                                 related_name='stacks',
                                 on_delete=models.CASCADE)
    text = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)


class Support(models.Model):
    logo = models.ImageField(
        ("Image"), upload_to='None', blank=True, default='default.jpg')
    created_at = models.DateTimeField(auto_now_add=True)


class Team(models.Model):
    image = models.ImageField(
        ("Image"), upload_to='None', blank=True, default='default.jpg')
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
