""" Users Table API Views """

import json
import bcrypt
from .models import Users
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist


@api_view(["GET"])
def get_users(request):
    """ Return all users from Users table """

    if request.method == "GET":
        users = Users.objects.all()
        data = serializers.serialize("json", users)

        return JsonResponse(data, safe=False)

    return JsonResponse({"message": "Invalid request method"}, status=405)


@api_view(["POST"])
def signup(request):
    """ User sign up """

    if request.method == "POST":
        data = json.loads(request.body)
        
        try:
            required_fields = ["email", "password", "firstName", "lastName", "role"]

            if data["role"] == "Landowner":
                required_fields.append("carbonProjectId")

            for field in required_fields:
                if not data.get(field):
                    return JsonResponse({"Error": f"Missing or empty [{field}]"}, status=400)

            roles = {
                'Landowner': 1,
                'Mill': 2,
                'Other': 3
            }

            password = bcrypt.hashpw(data["password"].encode(), bcrypt.gensalt())

            if not Users.objects.filter(email=data["email"]).exists():
                user = Users.objects.create(
                    first_name=data["firstName"],
                    last_name=data["lastName"],
                    email=data["email"],
                    password=password,
                    role_id=roles[data["role"]],
                    city=data["city"],
                    zip_code=data["zip"]
                )

                user.save()

                # need to add user to specific tables

            else:
                return JsonResponse({"Duplicate Error": f"User [{data['email']}] already exists"}, status=400)
        
        except ConnectionRefusedError as error:
            return JsonResponse({"Connection Error": error}, status=400)
        
        new_user = Users.objects.filter(email=data["email"])
        json_data = serializers.serialize("json", new_user)

        return HttpResponse(json_data, content_type="application/json", status=200)


@api_view(["POST"])
def login(request):
    """ User Login """

    if request.method == "POST":
        data = json.loads(request.body)

        password = data["password"].encode("utf-8")
        try:
            user = Users.objects.get(email=data["email"])

            if bcrypt.checkpw(password, user.password):
                json_data = serializers.serialize("json", [user])

                return HttpResponse(json_data, content_type="application/json")
            else:
                return JsonResponse({"Error": "Incorrect password"}, status=400)
        except ObjectDoesNotExist:
            return JsonResponse({"Error": "No account found"}, status=400)
