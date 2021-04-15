import React from 'react';

// style
import "./style/Home.scss";

//components
import Slider from "./component/Slider";
import WelcomeBadge from "./component/WelcomeBadge";

export default function Home() {

    const slides = [{image: "/slide1-1.jpg"}, {image: "/slide1-2.jpg"}, {image: "/slide1-3.jpg"}];


    return <div id="home">
        <Slider slides={slides}/>
        <WelcomeBadge/>
        Clinic Pharma - Home
    </div>
}