import React, {useEffect } from "react";



export const ViewBalance = () => {

    useEffect(() => {
		fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
			method: "POST",
			headers: {
				"x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd",
			},
			body: JSON.stringify({
				custID:'5',
                accountKey:'zakvst0g-b695-de32-b5zn-eu06sbou8n8'
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setAccounts(data);
				console.log(data);
			});
	}, []);
}

    return (
        <div>



            
        </div>
    )
}

export default ViewBalance;
