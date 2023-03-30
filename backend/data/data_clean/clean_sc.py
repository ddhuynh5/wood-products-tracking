import pandas as pd


excel_file = pd.ExcelFile("South Carolina_2021.xlsx")
county_prod = pd.read_excel(excel_file, "County Production")
state_prod = pd.read_excel(excel_file, "State Production")

valid_prod = [
    "COUNTY_NAME",
    "OWNER_MEANING",
    "SPGRP_NAME",
    "REMCLASSCD_MEANING",
    "SOURCECD_MEANING",
    "PRODCD_MEANING",
    "MCFVOL",
    "RPA_STD_AMOUNT",
    "RPA_STD_AMOUNT_UOM_MEANING",
    "SAWREMVOL",
    "GREEN_TONS"
]

county_filtered = county_prod[valid_prod]
valid_prod.remove("COUNTY_NAME")
state_filtered = state_prod[valid_prod]

county_state = pd.concat([county_filtered, state_filtered])

state_filtered.to_csv("output.csv")
