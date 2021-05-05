import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";

//style
import "./style/BenefitsSection.scss";
import API from "../../utilize/API";

export default function BenefitsSection() {

    const [benefits,setBenefits]=useState("");
    useEffect(() => {
        API("cms/menu/?menu=benefits")
            .then(({data, status}) => {
                if (status === 200) {
                    setBenefits(data.menu[0]);
                }
            });
    });

    return (
        <div id="benefits">
            <div className="row">
                <div className="col-md-6 text-side">
                    <div className="inner-text">
                        <h2>choose the best of your health</h2>
                        <p>{benefits.description}</p>
                        <ul className="list-unstyled mb-0">
                            {
                                benefits?.items?.map(benefit =>{
                                    return(
                                        <li key={benefit._id}>
                                            <i className="fas fa-angle-right"></i>
                                            {benefit.title}
                                        </li>
                                    )
                                })
                            }
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