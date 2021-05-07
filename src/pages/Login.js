import React from 'react';
import './Login.css';
import { withRouter } from "react-router";


//import { Auth } from "aws-amplify";

const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek"
const xApiKey = "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this)
    }

    //HERE
    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }

    //HERE
    login = async(event) => {

        event.preventDefault();
        console.log(this.state.userName);
        console.log(this.state.password)

        const requestOptions = {
            method: 'POST',
            headers: { 'x-api-key': xApiKey },
            body: JSON.stringify({
                "userName": this.state.userName,
                "userPass": this.state.password,
            })
        }

        const response = await fetch(url+'/login', requestOptions);
        const content = await response.json();
        if (content.code == 200){
            alert(content.message)
            // update state here, go to next page
            console.log("SUCCESS")


        }else if(content.code == 403) {
            alert("You have entered an incorrect username or password")
        }
        else {
            // console.log(content.code)
            // alert(content.errorMessage);
            console.log(content)
            console.log("error")

            this.props.history.push({
                pathname: '/account',
                state: {
                    userData: content
            }})
        }
    }

    mock = () => {
        this.props.history.push({
            pathname: '/dashboard',
            state: {
                userData: "content"
        }})
    }


    render() {
        return (
            <div>
                {/* <button onClick={this.mock}>GOOO</button> */}
                <form className="Login-Form">
                    <h1 className="Title">Log In</h1>
                    <div className="Rectangle-58" />
                    <h2 className="Email-Title">userName</h2>
                    <div className="Email-Flex">
                        <input 
                            type="text" 
                            id="Email" 
                            value = {this.state.userName}
                            onChange={this.handleChange}
                            name={"userName"}
                            required 
                        />
                    </div>
                    <h2 className="Password-Title">Password</h2>
                    <input
                        type="password"
                        name={"password"}
                        value={this.state.password}
                        onChange={this.handleChange}
                        id="Password"
                        required
                    />

                    <button
                        type="button"
                        className="Login-Button Login-Button-Speicifc"
                        onClick={this.login}
                    >
                    Login
                    </button>
                    <div className="Redirect">
                        Don't have an account?{" "}
                        <p className="Redirect2" to="/RegisterPage">
                            <u>Register</u> now
                        </p>{" "}
                    </div>
                </form>
            </div>
    )
       
    }
}


export default withRouter(Login) 