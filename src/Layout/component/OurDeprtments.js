import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// style
import './style/OurDeprtments.scss';

// block
import DepartmentBox from "./Block/DepartmentBox";

export default function OurDepartments()
{
    const state = { galleryItems: [4], currentIndex: 0};

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 3},
        1024: {items: 4}
    }

    const {galleryItems, currentIndex} = state;

    const departments = [
        {name: "Dental Care", about: "Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced", icon: "flaticon-medical icon-med"},
        {name: "Medicine", about: "Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced", icon: "flaticon-pills icon-med"},
        {name: "Cardeology", about: "Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced", icon: "flaticon-medical-5 icon-med"},
        {name: "Orthopedic", about: "Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced", icon: "flaticon-human-hip icon-med"},
        {name: "Dental Care", about: "Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced", icon: "flaticon-medical icon-med"},
        {name: "Medicine", about: "Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced", icon: "flaticon-pills icon-med"}
    ]

    return(
        <div id="our-departments">
            <div className="container">
                <div className="departments-header">
                    <h5 className="title">Our Departments</h5>
                    <span className="sub-title">Dedicated Services</span>
                    <div className="line"> </div>
                </div>
                <div className="departments-content">
                    <AliceCarousel
                        items={galleryItems}
                        responsive={responsive}
                        autoPlayInterval={1000}
                        fadeOutAnimation={false}
                        dotsDisabled={true}
                        buttonsDisabled={true}
                        touchTrackingEnabled={true}
                        mouseTrackingEnabled={true}
                        slideToIndex={currentIndex}
                    >
                        {departments?.map((department, i) => {
                            return <div key={i}>
                                <DepartmentBox department={i + 1} name={department.name} about={department.about} icon={department.icon} />
                            </div>
                        })}

                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
}