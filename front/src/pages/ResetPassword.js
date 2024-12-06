import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

function ResetPassword(props) {
    return (
        <div>

            <div className="login-header box-shadow">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="brand-logo">
                        <Link to="#">
                            <img src="/images/deskapp-logo.svg" alt=""/>
                        </Link>
                    </div>
                    <div className="login-menu">
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="/images/forgot-password.png" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="login-box bg-white box-shadow border-radius-10">
                                <div className="login-title">
                                    <h2 className="text-center text-primary">Reset Password</h2>
                                </div>
                                <h6 className="mb-20">Enter your new password, confirm and submit</h6>
                                <form>
                                    <div className="input-group custom">
                                        <input type="text" className="form-control form-control-lg"
                                               placeholder="New Password"/>
                                        <div className="input-group-append custom">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon className="dw dw-padlock1" icon={faLock}/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="input-group custom">
                                        <input type="text" className="form-control form-control-lg"
                                               placeholder="Confirm New Password"/>
                                        <div className="input-group-append custom">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon className="dw dw-padlock1" icon={faLock}/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-5">
                                            <div className="input-group mb-0">
                                                {/* <!--
                                                    use code for form submit
                                                     <input className="btn btn-primary btn-lg btn-block" type="submit" value="Submit">
                                                 -->*/}
                                                <Link className="btn btn-primary btn-lg btn-block"
                                                      to="#">Submit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ResetPassword;