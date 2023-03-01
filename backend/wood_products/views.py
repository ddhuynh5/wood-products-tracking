from datetime import datetime
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WoodProductSerializer
from .models import WoodProduct
from django.http import JsonResponse
from rest_framework.views import APIView  

def index(request):
    current_time = datetime.now().strftime("%-I:%S %p")
    current_date = datetime.now().strftime("%A %m %-Y")

    data = {
        'time': current_time,
        'date': current_date,
    }

    return JsonResponse(data)


class WoodProductView(viewsets.ModelViewSet):
    serializer_class = WoodProductSerializer
    queryset = WoodProduct.objects.all()


class HelloWorld(APIView):
    def get(self, request, format=None):
        return JsonResponse({"message":'HELLO WORLD'})
