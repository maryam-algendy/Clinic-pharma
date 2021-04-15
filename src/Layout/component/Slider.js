import React from "react";
import {Button, Carousel} from "react-bootstrap";
//style
import "./style/Slider.scss";

export default function Slider(props) {
    return (
        <div id="slider">
            <Carousel>
                {props?.slides?.map((slide, id) =>
                    <Carousel.Item key={id}>
                        <img src={slide.image} alt="not found" className="img-fluid"/>
                        <div className="header text-center text-md-left">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <h1>we take care of your healthy health</h1>
                                        <p>the quickest, easiest way to get your medicines , book and keep track of your
                                            appointments</p>
                                        <Button>know more</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
}