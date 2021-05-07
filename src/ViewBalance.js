import React, {useEffect } from "react";



export const ViewBalance = () => {

    useEffect(() => {
		fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
			method: "POST",
			headers: {
				"x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLA",
			},
			body: JSON.stringify({
				custID:
                accountKey
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
