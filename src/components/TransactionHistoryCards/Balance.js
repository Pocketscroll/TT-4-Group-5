import { Card } from "antd";
import React from "react";

function Balance(props) {
	return (
		<Card style={{ width: 300 }}>
			<h5>Account Balance:</h5>
			<h6>S$400</h6>
		</Card>
	);
}

export default Balance;

// const Balance = () => {
// 	const [accounts, setAccounts] = useState([]);

// 	useEffect(() => {
// 		fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
// 			method: "POST",
// 			headers: {
// 				"x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd",
// 			},
// 			body: JSON.stringify({
// 				custID: "5",
// 				accountKey: "zakvst0g-b695-de32-b5zn-eu06sbou8n8",
// 			}),
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setAccounts(data);
// 				console.log(data);
// 			});
// 	}, []);

// 	return (
// 		<div>
// 			return (
// 			<Card style={{ width: 300 }}>
// 				<h5>Account Balance:</h5>
// 				<h6>{account.accountNumber}</h6>
// 				<h6>{account.availableBal}</h6>
// 			</Card>
// 			)
// 		</div>
// 	);
// };

// export default Balance;
