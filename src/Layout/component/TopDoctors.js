import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// style
import './style/TopDoctors.scss';

// block
import DoctorBlock from "./Block/DoctorBlock";

export default function TopDoctors()
{
    const state = { galleryItems: [4], currentIndex: 0};

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 4}
    }

    const {galleryItems, currentIndex} = state;

    const doctors = [
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team11_xvpcka.png", alter: "Zinia", title: "Dr. Zinia Zara", span: "Gynaecology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team12_njoetd.png", alter: "Nadim", title: "Dr. Nadim Kamal", span: "Orthopaedics"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573404/Assets/team/team13_stxxn5.png", alter: "Rihana", title: "Dr. Rihana Roy", span: "Lense Expert"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573392/Assets/team/team14_lxncqp.png", alter: "Steven", title: "Dr. Steven Jobs", span: "Cardiology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team10_fb2mmd.png", alter: "Zinia", title: "Dr. Zinia Zara", span: "Gynaecology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team08_r24q5v.png", alter: "Nadim", title: "Dr. Nadim Kamal", span: "Orthopaedics"}
    ]

    return(
        <div id="top-doctors">
            <div className="container">
                <div className="top-doctors-header">
                    <h5 className="title">Specialist Doctors</h5>
                    <span className="sub-title">Experienced Doctor</span>
                    <div className="line"> </div>
                </div>
                <div className="top-doctors-content">
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
                        {doctors?.map((doctor, i) => {
                            return <div key={i}>
                                <DoctorBlock doctor={i + 1} image={doctor.image} alter={doctor.alter} title={doctor.title} span={doctor.span} />
                            </div>
                        })}
                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
}