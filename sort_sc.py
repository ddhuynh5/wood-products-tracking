import pandas as pd


def sort_dataframe(dataframe):
    first = dataframe.columns[0]
    second = dataframe.columns[1]
    sort = {}
    
    for index, row in dataframe.iterrows():
        sort[row[first]] = row[second]
    
    return sort


excel_file = pd.ExcelFile("South Carolina_2021.xlsx")
county_prod = pd.read_excel(excel_file, "County Production")

county = ["COUNTYCD", "COUNTY_NAME"]
owner = ["OWNCD", "OWNER_MEANING"]
spgrp = ["SPGRPCD", "SPGRP_NAME"]
remclass = ["REMCLASSCD", "REMCLASSCD_MEANING"]
source = ["SOURCECD","SOURCECD_MEANING"]
prod = ["PRODCD","PRODCD_MEANING"]
rpa_std_amount_uom = ["RPA_STD_AMOUNT_UOM_CODE", "RPA_STD_AMOUNT_UOM_MEANING"]

county_df = county_prod[county].drop_duplicates()
owner_df = county_prod[owner].drop_duplicates()
spgrp_df = county_prod[spgrp].drop_duplicates()
remclass_df = county_prod[remclass].drop_duplicates()
source_df = county_prod[source].drop_duplicates()
prod_df = county_prod[prod].drop_duplicates()
rpa_std_amount_uom_df = county_prod[rpa_std_amount_uom].drop_duplicates()

df_list = []

df_list.append(county_df)
df_list.append(owner_df)
df_list.append(spgrp_df)
df_list.append(remclass_df)
df_list.append(source_df)
df_list.append(prod_df)
df_list.append(rpa_std_amount_uom_df)


for df in df_list:
    print(sort_dataframe(df))
