import os
import json
import pandas as pd

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "admin.settings")
django.setup()


@api_view(["GET"])
def get_data(request):
    """ [TEST] Packs all data into JSON and returns to frontend """

    with open("./static/county_production_sc.csv") as data:
        csv = pd.read_csv(data)
        df = csv.to_json()
    
    return JsonResponse(json.loads(df))
