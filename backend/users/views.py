""" Users Table API Views """

from .models import Users
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.core import serializers

@api_view(["GET"])
def get_users(request):
    """ Return all users from Users table """

    if request.method == "GET":
        users = Users.objects.all()
        data = serializers.serialize('json', users)

        return JsonResponse(data, safe=False)

    return JsonResponse({"message": "Invalid request method"}, status=405)
