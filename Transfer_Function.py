import requests
user_list = []
api_output = {} #JSON format from API call

#FUNCTION IS TO GET A VALID USER ENTRY, AMOUNT MUST BE NUERMIC & USER TO SEND TO MUST BE IN USER_LIST
import re
user_list = ['junming'] #just setting up, eventually will be valid user list from DBS (in payee list)

def check_user_input(pay_to, amount):
    if pay_to in user_list:
        if re.search("(0-9.)*", amount):
            try:
                amount = float(amount)
            except:
                print('Invalid Input, entry is not in dollar convention')
                pay_to = None
                amount = None
            if amount > 0.0:
                print("Success!")
            else:
                print('Invalid Input, entry has to be more than 0')
                pay_to = None
                amount = None
        else:
            print('Invalid Input, entry has to be numeric - dollar convention')
            pay_to = None
            amount = None
    else:
        print('Invalid Input, provided entry not in user list')
        pay_to = None
        amount = None
    return pay_to, amount

check_user_input('junming','2.00')

#THIS PART IS JUST FEEDING INTO THE API JSON BODY TO CALL API
api_output['amount'] = amount
apt_output['payeeID'] = pay_to
