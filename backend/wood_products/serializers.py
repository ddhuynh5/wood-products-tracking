from rest_framework import serializers
from .models import WoodProduct

class WoodProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = WoodProduct
        fields = ("id", "year", "name", "tree_type", "tons")