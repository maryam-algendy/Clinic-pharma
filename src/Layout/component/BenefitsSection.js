import React from "react";
import {Image} from "react-bootstrap";

//style
import "./style/BenefitsSection.scss";

export default function BenefitsSection() {
    return (
        <div id="benefits">
            <div className="row">
                <div className="col-md-6 text-side">
                    <div className="inner-text">
                        <h2>choose the best of your health</h2>
                        <p>Our online doctor offers patients the following benefits via our app </p>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <i className="fas fa-angle-right"></i>
                                free consultation
                            </li>
                            <li>
                                <i className="fas fa-angle-right"></i>
                                quality doctors
                            </li>
                            <li>
                                <i className="fas fa-angle-right"></i>
                                professional experts
                            </li>
                            <li>
                                <i className="fas fa-angle-right"></i>
                                affordable price
                            </li>
                            <li>
                                <i className="fas fa-angle-right"></i>
                                24/7 opened
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 img-side">
                    <Image src="https://res.cloudinary.com/medical-pharma/image/upload/v1618573369/Assets/figures/figure8_vp0fwd.jpg"/>
                </div>
            </div>
        </div>
    )
}