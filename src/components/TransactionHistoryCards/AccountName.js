import { Card } from "antd";
import React from "react";
import { withRouter } from "react-router";

class AccountName extends React.Component {
	render() {
		console.log(this.props.location.state.userData);

		const userData = this.props.location.state.userData;
		return (
			<div style={{ marginTop: 30 }}>
				<Card style={{ width: 300 }}>
					<h5>Account Name:</h5>
					<h6>
						{userData.firstName} {userData.lastName}
					</h6>
				</Card>
			</div>
		);
	}
}

export default withRouter(AccountName);
