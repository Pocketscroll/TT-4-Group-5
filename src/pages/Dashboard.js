import React from "react"
import { withRouter } from "react-router";

class Dashboard extends React.Component {
   
    render() {
        console.log(this.props.location.state.userData)

        const userData = this.props.location.state.userData
        return (
            <div style={{marginTop:30}}>
              


                
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                                   
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                            <h5>
                                                {userData.firstName + " " + userData.lastName}
                                            </h5>
                                           
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p></p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Account Key</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.accountKey}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.firstName}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.lastName}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>NRIC</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.nric}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.address}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone Number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.phoneNumber}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.email}</p>
                                            </div>
                                        </div>
                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>           
                </div>

            </div>

        )
    }
}

export default withRouter(Dashboard)