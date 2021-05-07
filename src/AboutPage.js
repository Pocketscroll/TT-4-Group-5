import React from "react"
import { withRouter } from "react-router";

class AboutPage extends React.Component {
   
    render() {
        console.log(this.props.location.state.userData)

        const userData = this.props.location.state.userData
        return (
            <div>
                <div>{userData.phoneNumber}</div>
                <div>{userData.custID}</div>
                <div>{userData.email}</div>
                <div>ETC</div>
            </div>

        )
    }
}

export default withRouter(AboutPage)