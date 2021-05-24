import React from "react";

//style
import "./style/AboutUsBlock.scss";
import {Image} from "react-bootstrap";

export default function AboutUsBlock(){
    return(
        <div id ="about-us-block">
            <h2>let's know short story about clinical pharma</h2>
            <p>Clinic Pharma is a medical system based on serving patients, improving the form of services provided to them, and automating the facilitation of their communication with doctors</p>
            <div className="row img-section">
                <div className="col-md-6">
                    <Image src="/about5.jpg"/>
                </div>
                <div className="col-md-6">
                    <Image src="/about6.jpg"/>
                    <i className="flaticon-play-button"> </i>
                </div>
            </div>
            <p>
                The system facilitates building a patient's disease history that can be referred to at all times,
                especially critical times, and facilitates patient communication with doctors,
                whether for the purpose of booking an actual interview or remote communication,
                which is what Clinique Pharma provides as a service among its services that also include providing access to the required medical treatments and tools
                Without the need to go through the trouble of searching, it is only a click of a button and you have what you want.
            </p>
            <div className="row principles">
                <div className="col-md-6">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fas fa-angle-right"> </i>
                            keep patient first
                        </li>
                        <li>
                            <i className="fas fa-angle-right"> </i>
                            keep everyone safe
                        </li>
                        <li>
                            <i className="fas fa-angle-right"> </i>
                            work together
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fas fa-angle-right"> </i>
                            pursue excellence
                        </li>
                        <li>
                            <i className="fas fa-angle-right"> </i>
                            manage your resources
                        </li>
                        <li>
                            <i className="fas fa-angle-right"> </i>
                            keep learning
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
