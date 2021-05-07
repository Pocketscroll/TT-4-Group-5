import React from 'react';
import { withRouter } from "react-router";

import { updateUserDetails } from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class MakeTransfer extends React.Component {

    constructor() {
        super()
        this.state = {
            payeeID: 0,
            amount: 0
        }
    }

    render() {

        console.log("custID:", this.props.userDetails.custID)
        console.log("accountkey", this.props.userDetails.accountKey)

        return (

            <div>
            {/* 
            <div> {this.props.userDetails.custID}</div>

            <div> {this.props.userDetails.accountKey}</div> */}

            <form className="Login-Form">
            <div className="Rectangle-58" />
            <h2 className="Email-Title">Payee ID</h2>
            <div className="Email-Flex">
                <input 
                    type="number" 
                    id="Email" 
                    value = {this.state.payeeID}
                    onChange={this.handleChange}
                    name={"userName"}
                    required 
                />
            </div>
            <h2 className="Password-Title">Amount</h2>
            <input
                type="number"
                name={"password"}
                value={this.state.amount}
                onChange={this.handleChange}
                id="Password"
                required
            />

            <button
                type="button"
                className="Login-Button Login-Button-Speicifc"
                onClick={this.login}
            >
            Make Transfer
            </button>
           
        </form>

        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      userDetails: state.userDetails,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateUserDetails: updateUserDetails
    }, dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MakeTransfer));
