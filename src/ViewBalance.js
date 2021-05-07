import React, {useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";


const ViewBalance = () => {
	const [accounts, setAccounts] = useState([]);
	const location = useLocation();
	const history = useHistory();

    useEffect(() => {
		fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
			method: "POST",
			headers: {
				"x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd",
			},
			body: JSON.stringify({
				custID:5,
                accountKey:'zakvst0g-b695-de32-b5zn-eu06sbou8n8',

				// custID:location.state.custID,
                // accountKey:location.state.accountKey,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setAccounts(data);
				console.log(data);
			});
	}, []);


    return (
		<div className="BalanceTable">
		<table style={{border:"1px solid"}}>
			<tr style={{border:"1px solid"}}>
				<th style={{border:"1px solid"}} >Account Name  </th>
				<th style={{border:"1px solid"}} >Available Balance</th>
				<th style={{border:"1px solid"}}>Account number </th>
			</tr>
			{accounts.map((account) => {
            return(
                  <tr style={{border:"1px solid"}}>
					<td style={{border:"1px solid"}}>{(account.accountName)}</td>
                    <td style={{border:"1px solid"}}> $ {(account.availableBal)}</td>
                    <td style={{border:"1px solid"}}> {(account.accountNumber)}</td>
                </tr>
            );
        })}
        </table>   
        </div> 
        );

};

export default ViewBalance;