from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import NavBar, Img, Product, Case, Stack, Support, Team


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


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'image', 'text', 'created_at']
    list_filter = ['created_at']

    def image_show(self, obj):
        if obj.image:
            return mark_safe("<img src='{}' width='60' />".format(obj.image.url))
        return "None"

    image_show.__name__ = "Картинка"


@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ['logo', 'image', 'text', 'created_at']
    list_filter = ['created_at']

    def image_show(self, obj):
        if obj.image:
            return mark_safe("<img src='{}' width='60' />".format(obj.image.url))
        return "None"

    image_show.__name__ = "Картинка"


@admin.register(Stack)
class StackAdmin(admin.ModelAdmin):
    list_display = ['text', 'created_at']
    list_filter = ['created_at']

    def image_show(self, obj):
        if obj.image:
            return mark_safe("<img src='{}' width='60' />".format(obj.image.url))
        return "None"

    image_show.__name__ = "Картинка"


@admin.register(Support)
class SupportAdmin(admin.ModelAdmin):
    list_display = ['logo', 'created_at']
    list_filter = ['created_at']

    def image_show(self, obj):
        if obj.image:
            return mark_safe("<img src='{}' width='60' />".format(obj.image.url))
        return "None"

    image_show.__name__ = "Картинка"


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ['image', 'name','role', 'created_at']
    list_filter = ['created_at']

    def image_show(self, obj):
        if obj.image:
            return mark_safe("<img src='{}' width='60' />".format(obj.image.url))
        return "None"

    image_show.__name__ = "Картинка"
