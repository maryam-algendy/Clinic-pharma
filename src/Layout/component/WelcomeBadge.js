import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

//style
import "./style/WelcomeBadge.scss";
//
import API from "../../utilize/API";


export default function WelcomeBadge() {

    const [features,setFeatures]=useState("");
    useEffect(() => {
        API("cms/menu/?menu=features")
            .then(({data, status}) => {
                if (status === 200) {
                    setFeatures(data.menu[0])
                }
            });
    });

    return (
        <div id="welcome-badge">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 img-side">
                        <img alt="not found" src="https://res.cloudinary.com/medical-pharma/image/upload/v1618573350/Assets/about/about1_qmakho.png"/>
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
                        <img alt="not found" src="https://res.cloudinary.com/medical-pharma/image/upload/v1618573349/Assets/about/sign1_ht7col.png"/>
                    </div>

                    <div className="col-lg-4 rhs">
                        {
                            features?.items?.map( feature => {
                                return(
                                    <Link key={feature._id} to={feature.link}>
                                        <i className={feature.icon}> </i>
                                        {feature.title}
                                        <span className="float-right">
                                <i className="fas fa-angle-right"> </i>
                            </span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}