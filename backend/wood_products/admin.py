from django.contrib import admin
from .models import WoodProduct

class WoodProductAdmin(admin.ModelAdmin):
    list_display = ("year", "name", "tree_type", "tons")

admin.site.register(WoodProduct, WoodProductAdmin)