""" Test connection to SQL Server db using pyodbc """

import pyodbc

server = "wfic-cvc3-sql.campus.cu.clemson.edu"
database = "cevac3"
username = "cvc3_rw"
password = "BonedUnclampedJogging4$"

connect = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';ENCRYPT=yes;UID='+username+';PWD='+ password)
cursor = connect.cursor()

query = "SELECT * FROM dbo.BA_carbonDB FETCH FIRST 10 ROWS ONLY"
cursor.execute(query)

result = cursor.fetchall()
for row in result:
    print(row)
    