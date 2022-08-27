from django.db import models

class NavBar(models.Model):
    navName = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

class Img(models.Model):
    imgName = models.CharField(max_length=100)
    imgimg = models.ImageField(("Image"), upload_to='None', blank=True, default='default.jpg') 
    created_at = models.DateTimeField(auto_now_add=True)