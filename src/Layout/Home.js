import React from 'react';

// style
import "./style/Home.scss";

//components
import Slider from "./component/Slider";
import WelcomeBadge from "./component/WelcomeBadge";
import OurDepartments from "./component/OurDeprtments";
import BenefitsSection from "./component/BenefitsSection";
import TopDoctors from "./component/TopDoctors";
import EmergencySection from "./component/EmergencySection";
import LatestBlogs from "./component/LatestBlogs";
import Testimonial from "./component/Testimonial";

export default function Home() {

    const slides = [{image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573380/Assets/slides/slide1-1_wcspqu.jpg"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573380/Assets/slides/slide1-2_bzwsju.jpg"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573381/Assets/slides/slide1-3_qmcsr6.jpg"}
    ];


    return <div id="home">
        <Slider slides={slides} fade={true}/>
        <WelcomeBadge/>
        <OurDepartments />
        <BenefitsSection />
        <TopDoctors />
        <EmergencySection />

        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-12 col-md-6 p-0">
                    <LatestBlogs />
                </div>
                <div className="col-12 col-md-6 p-0">
                    <Testimonial />
                </div>
            </div>
        </div>

    </div>
}