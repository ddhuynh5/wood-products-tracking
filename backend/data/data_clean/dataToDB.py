#Read in TPO file and send data to CVC3 database 
#Need to change database when we get our own
import sys
import pandas as pd
from sqlalchemy import create_engine, text

#concat two word state inputs
def concat(*args, sep="/"):
    return sep.join(args)

#convert DF data type to SQL type
def convertDataType(input):
    if input == 'int64':
        return 'int'
    elif input == 'str':
        return 'varchar(MAX)'
    elif input == 'float64':
        return 'float'
    else:
        return input

#If input is a two word state (South Carolina) concatinates to one input
#Otherwise, reads input file name 
if len(sys.argv) == 3:
    input = concat(sys.argv[1], sys.argv[2], sep=" ")
elif len(sys.argv) == 2:
    input = sys.argv[1]
else:
    print("Error: Please enter file name in command line")
    exit()

#Read different file types for modularity
if(".csv" in input):
    df = pd.read_csv(input)
elif(".xlsx" in input):
    df = pd.read_excel(input)
else:
    print("Error: File type not accepted")
    exit()
    
#Create connection to CVC3
#DB type, DB username, DB password, DB name, DB drivers
engine = create_engine(
    'mssql+pyodbc://cvc3_rw:BonedUnclampedJogging4$@wfic-cvc3-sql.campus.cu.clemson.edu/testdb?'
    'driver=ODBC+Driver+17+for+SQL+Server')
try:
    connection = engine.connect()
except:
    print("Error: Database connection unsuccessful")
    exit()

#Send file to DB
#If column not in BD, add then send 
try:
    df.to_sql('TPOtest', con=engine, if_exists='append', index=False)
except:
    query = text(f"SELECT * FROM TPOtest")
    result = connection.execute(query)
    connection.commit()
    
    dbColumns = result.keys()
    for dfColumn in df.columns:
        if dfColumn not in dbColumns:
            colType = convertDataType(str(df[dfColumn].dtypes))
            
            newQuery = text(f'ALTER TABLE TPOtest ADD {dfColumn} {colType}')
            connection.execute(newQuery)
            connection.commit()
finally:
    try:
        df.to_sql('TPOtest', con=engine, if_exists='append', index=False)    
    except:
        print("Error: Unable to transfer file")
    finally:
        connection.close()
        exit()

    #Copy sql table to df, add column, then push to db. Takes a while    
        #data = pd.read_sql('SELECT * FROM TPOtest', engine)
        #df2 = pd.concat([data,df])
        #df2.to_sql('TPOtest', con=engine, if_exists = 'replace', index=False)