""" Users Table API Views """

import json
import bcrypt
from .models import Users, LandOwner, Mill
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist


user_types = {
    "Users": Users,
    "LandOwner": LandOwner,
    "Mill": Mill
}


@api_view(["GET"])
def call_table(request):
    """ [Test Function] Return all users from a table """

    if request.method == "GET":

        table = json.loads(request.body)["table"]
        data = user_types[table].objects.all()
        
        response = serializers.serialize("json", data)

        return JsonResponse(response, safe=False)

    return JsonResponse({"message": "Invalid request method"}, status=405)


@api_view(["POST"])
def signup(request):
    """ User sign up """

    if request.method == "POST":
        data = json.loads(request.body)
        
        try:
            required_fields = ["email", "password", "firstName", "lastName", "role"]

            if data["role"] == "Landowner":
                if data["carbonProjectId"]:
                    required_fields.extend(["carbonProjectId"])
                required_fields.extend(["forestType", "size", "location"])
            elif data["role"] == "Mill":
                required_fields.extend(["productType", "location"])

            print(required_fields)

            for field in required_fields:
                if not data.get(field):
                    return JsonResponse({"Error": f"Missing or empty [{field}]"}, status=400)

            roles = {
                'Landowner': 1,
                'Mill': 2
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

                print(data["role"])

                # need to add user to specific tables
                if data["role"] == "Landowner":
                    land = LandOwner.objects.create(
                        user_id=user.user_id,
                        carbon_project_id=data["carbonProjectId"] if "carbonProjectId" in data else "",
                        forest_type=data["forestType"],
                        location=data["location"],
                        size=data["size"]
                    )
                    print("Created LandOwner:", land)

                elif data["role"] == "Mill":
                    mill = Mill.objects.create(
                        user_id=user.user_id,
                        location=data["location"],
                        product_type=data["productType"]
                    )
                    print("Created Mill:", mill)

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
            return JsonResponse({"Error": "No account found, check your email/password!"}, status=400)
