from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import NavBar, Img

@admin.register(NavBar)
class NavBarAdmin(admin.ModelAdmin):
    list_display = ['navName', 'created_at']

@admin.register(Img)
class ImgAdmin(admin.ModelAdmin):
    list_display = ['imgName', 'imgimg', 'created_at']
    list_filter = ['created_at']

    def image_show(self, obj):
        if obj.image:
            return mark_safe("<img src='{}' width='60' />".format(obj.image.url))
        return "None"

    image_show.__name__ = "Картинка"