#Consolidating all into a dictionary
count = 0 #setting up as 0 for the first entry

def store_transaction(custID,payeeID,date,amount,database):
    count = len(database.keys()) #check with database how many items are there
    count += 1 #first entry starts from 1
    db_naming = date #setting up date as the new transaction number reference number for dictionary
    input_setup = [amount, payeeID, custID]

    if bool(database) == False:
        database[db_naming] = input_setup

    if bool(database) == True:
        if date in database.keys():
            pass
        else:
            database[db_naming] = input_setup

    return database

#Apply filter to retreive the range of date of interest
def slice_transaction(from_date, till_date, database):
    filtered_output = {}
    query_range = list(range(from_date,till_date+1,1))
    for key in database.keys():
        if key in query_range:
            filtered_output[key] = database[key]
    return filtered_output
