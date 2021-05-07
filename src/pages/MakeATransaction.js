import React from 'react';
const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek"
const xApiKey = "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"

class MakeATransaction extends React.Component {

    constructor(props) {
        super();
        this.state = {
            payeeID: "123",
            amount: 123
        }
    }


    makeTransfer = async () => {
        // const spawn = require('child_process').spawn;

        // const path = "../../Transfer_Function.py"

        // const spawnedProcessVti = spawn(path, [this.state.payeeID, this.state.amount])

        // spawnedProcessVti.stdout.on('data', (data) => {
        //     let parsedData = ''
        //     try {
        //         parsedData = Buffer.from(data, 'utf-8').toString();
        //         alert(parsedData)
        //     } catch (e) {
        //         console.log(e);
        //         return
        //     }
        // })

          //HERE

        //   accountKey: "zakvst0g-b695-de32-b5zn-eu06sbou8n8"
        //   address: "228 Smith Spur Suite 096\nPort Marcusberg, WY 61820"
        //   age: 77
        //   custID: 5
        //   email: "donald@yahoo.com"
        //   firstName: "Donald"
        //   gender: "Male"
        //   lastName: "Flores"
        //   nric: "S4435809B"
        //   phoneNumber: "(+65) 86498189"
   
        const requestOptions = {
            method: 'POST',
            headers: { 'x-api-key': xApiKey },
            body: JSON.stringify({
                "custID": 5,
                "accountKey": "zakvst0g-b695-de32-b5zn-eu06sbou8n8",
                "payeeID": 5,
                "amount": 12,
                "eGift": true,
                "message": "I am sending you some money"

            })
        }

        const response = await fetch(url+'/transactions/add', requestOptions);
        const content = await response.json();
        if (content.code == 200){
            alert(content.message)
            // update state here, go to next page


        }else if(content.code == 403) {
            alert("You have entered an incorrect email or password")
        }
        else {
            console.log(content)
            alert(content.errorMessage);
        }   

    }

    render() {
        return (
            <div>
                <button onClick={this.makeTransfer}>Sub</button>
                 <form className="Login-Form">
                    <h1 className="Title">Payee ID</h1>
                    <div className="Rectangle-58" />
                    <h2 className="Email-Title">userName</h2>
                    <div className="Email-Flex">
                        <input 
                            type="text" 
                            id="Email" 
                            value = {this.state.payeeID}
                            onChange={this.handleChange}
                            name={"userName"}
                            required 
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default MakeATransaction;