count = 0 #initializing count to 0 in case it is the first entry

def store_transaction(custID,payeeID,date,amount,database):
    count = len(database.keys()) #check with database how many items are there
    count += 1 #first entry starts from 1
    db_naming = 'db_transaction_'+ str(count) #setting up the new transaction number
    input_setup = [date, amount, payeeID, custID]
    if bool(database): #checking if the dictionary is empty
        is_duplicate = False #prelim - troubleshooting for bug only
        for x in range(1,len(database.keys())+1):
            db_naming_check = 'db_transaction_' + str(x)
            if input_setup[0] == database[db_naming_check][0]:
                print('User already in database')
                is_duplicate = True
            elif is_duplicate == False:
                database[db_naming] = input_setup

    else:
        database[db_naming] = input_setup

    return database

store_transaction()
