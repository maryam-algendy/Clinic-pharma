import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

// actions
import {loadSlides} from "../actions";

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
    const slides = useSelector(state => state.portal.slides);
    const blogs = useSelector(state => state.portal.blogs);
    const topDoctors = useSelector(state => state.portal.top_doctors);

    return <div id="home">
        <Slider slides={slides} fade={true}/>
        <WelcomeBadge/>
        <OurDepartments />
        <BenefitsSection />
        <TopDoctors topDoctors={topDoctors} />
        <EmergencySection />

        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-12 col-md-6 p-0">
                    <LatestBlogs blogs={blogs} />
                </div>
                <div className="col-12 col-md-6 p-0">
                    <Testimonial />
                </div>
            </div>
        </div>

    </div>
}