import React, {useEffect, useState } from "react";



const ViewBalance = () => {
	const [accounts, setAccounts] = useState([]);

    useEffect(() => {
		fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
			method: "POST",
			headers: {
				"x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd",
			},
			body: JSON.stringify({
				custID:'5',
                accountKey:'zakvst0g-b695-de32-b5zn-eu06sbou8n8',
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setAccounts(data);
				console.log(data);
			});
	}, []);


    return (
        <div>
			{accounts.map((account) => {
				return (
					<div className='account-balance'>
					<ul>
						<li>{account.accountName}</li>
						<li>{account.availableBal}</li>
						<li>{account.accountNumber}</li>
					</ul>					
					</div>
				);
			})}
		</div>	
		);
};

export default ViewBalance;
        