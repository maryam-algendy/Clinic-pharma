import React from "react";
import {Link} from "react-router-dom";
//style
import "./style/WelcomeBadge.scss";

export default function WelcomeBadge() {
    return (
        <div id="welcome-badge">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 img-side">
                        <img alt="not found" src="/about1.png"/>
                    </div>
                    <div className="col-lg-5 col-sm-6 text-side">
                        <h2>welcome to clinic pharma platform</h2>
                        <p>
                            We Care To Make Your Life Easier
                        </p>
                        <span>
                       Communicate with our doctors easily via our app in different ways and in various specializations
                            , online and at the comfort of your home
                            get your medicines delivered to your home
                        </span>
                        <img alt="not found" src="/sign1.png"/>
                    </div>
                    <div className="col-lg-4 rhs">
                        <Link to="/">
                            <i className="far fa-calendar-alt"></i>
                            request appointment
                            <span className="float-right">
                                <i className="fas fa-angle-right"></i>
                            </span>
                        </Link>
                        <Link to="/">
                            <i className="far fa-user"></i>
                            find doctors
                            <span className="float-right">
                                <i className="fas fa-angle-right"></i>
                            </span>
                        </Link>
                        <Link to="/">
                            <i className="fas fa-map-marker-alt"></i>
                            find locations
                            <span className="float-right">
                                <i className="fas fa-angle-right"></i>
                            </span>
                        </Link>
                        <Link to="/">
                            <i className="fas fa-phone"></i>
                            emergency contact
                            <span className="float-right">
                                <i className="fas fa-angle-right"></i>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}