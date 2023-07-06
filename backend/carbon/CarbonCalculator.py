import sys
import pandas as pd

#if len(sys.argv) == 2:
#    treeDataInput = sys.argv[1]
#else:
#    print("Error: Please enter harvest sheet")
#    exit()
 
#Read different file types for modularity
#if(".csv" in treeDataInput):
#   df = pd.read_csv(treeDataInput)
#elif(".xlsx" in input):
#    dfTreeData = pd.read_excel(treeDataInput)
#else:
#    print("Error: File type not accepted")
#    exit()


#C1
#Determine the Amount of Carbon in Harvested Wood Delivered to Mills

#df = df.set_index('Stand')
#totalHarvestWeight = float(df.loc['Totals', 'Total'].replace(",", ""))
totalHarvestWeight = float(input("Total Harvest Weight: "))
treeID = input("Tree ID: ")

HardwoodSawLogWeight = float(input("Hardwood Saw Log Weight: "))
HardwoodPulpwoodWeight = float(input("Hardwood Pulpwood Weight: "))
SoftwoodSawLogWeight = float(input("Softwood Saw Log Weight: "))
SoftwoodPulpwoodWeight = float(input("Softwood Pulpwood Weight: "))

totalCarbonWeight = 2204.6
waterWeightTable={
"111":"0.54",
"121":"0.54",
"128":"0.51",
"131":"0.47",
"221":"0.42",
"299":".7357",
"316":"0.49",
"391":"0.58",
"400":"0.62",
"491":"0.64",
"544":"0.53",
"611":"0.46",
"621":"0.4",
"690":"0.46",
"720":"0.52",
"762":"0.47",
"802":"0.6",
"812":"0.52",
"820":"0.56",
"827":"0.56",
"835":"0.6",
"838":"0.8",
"970":"0.54",
"999":"0.52",
"299":"0.52"
}
waterPercentage = float(waterWeightTable.get(treeID))


HardwoodSawLogWeight = ((HardwoodSawLogWeight * waterPercentage) * 0.5) % totalCarbonWeight
HardwoodPulpwoodWeight = ((HardwoodPulpwoodWeight * waterPercentage) * 0.5) % totalCarbonWeight
SoftwoodSawLogWeight = ((SoftwoodSawLogWeight * waterPercentage) * 0.5) % totalCarbonWeight
SoftwoodPulpwoodWeight = ((SoftwoodPulpwoodWeight * waterPercentage) * 0.5) % totalCarbonWeight
totalHarvestWeight = ((totalHarvestWeight * waterPercentage) * 0.5) % totalCarbonWeight

print(SoftwoodSawLogWeight)
#C2
#Mill efficiencies for Southeast region (VA, NC, SC, GA, FL)
HardwoodSawLogEF = 0.609
HardwoodPulpwoodEF = 0.591
SoftwoodSawLogEF = 0.636
SoftwoodPulpwoodEF = 0.553

HardwoodSawLogWeight *= HardwoodSawLogEF
HardwoodPulpwoodWeight *= HardwoodPulpwoodEF
SoftwoodSawLogWeight *= SoftwoodSawLogEF
SoftwoodPulpwoodWeight *= SoftwoodPulpwoodEF

MillSum = HardwoodSawLogWeight + HardwoodPulpwoodWeight + SoftwoodSawLogWeight + SoftwoodPulpwoodWeight

#C3
#Average Carbon Storage Over 100 Years in In-Use Wood Products
woodProductClassTable={
    "Softwood Lumber":"0.6999",
    "Hardwood Lumber":"0.0798",
    "Plywood":"0.0692",
    "Oriented Strand Board":"0.0269",
    "Non-structural Panels":"0.0186",
    "Miscellaneous":"0.0455",
    "Paper":"0.0601"
}

woodProductInUseFactor={
    "Softwood Lumber":"0.463",
    "Hardwood Lumber":"0.250",
    "Plywood":"0.484",
    "Oriented Strand Board":"0.582",
    "Non-structural Panels":"0.380",
    "Miscellaneous":"0.176",
    "Paper":"0.058"
}

cInUse = 0
for x in woodProductClassTable:
    percentClass = float(woodProductClassTable.get(x))
    storeFactor = float(woodProductInUseFactor.get(x))
    cInUse = MillSum*percentClass*storeFactor

#C4
#Average Carbon Storage Over 100 Years for Wood Products in Landfills
woodProductLandfillFactor={
    "Softwood Lumber":"0.463",
    "Hardwood Lumber":"0.250",
    "Plywood":"0.484",
    "Oriented Strand Board":"0.582",
    "Non-structural Panels":"0.380",
    "Miscellaneous":"0.176",
    "Paper":"0.058"
}

cLandfill = 0
for x in woodProductClassTable:
    percentClass = float(woodProductClassTable.get(x))
    storeFactor = float(woodProductLandfillFactor.get(x))
    cLandfill = MillSum*percentClass*storeFactor
    
