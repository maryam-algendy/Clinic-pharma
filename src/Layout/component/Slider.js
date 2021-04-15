import React from "react";
import {Button, Carousel} from "react-bootstrap";
//style
import "./style/Slider.scss";

export default function Slider(props) {
    return (
        <div id="slider">
            <Carousel controls={props.controls !== true} indicators={props.indicators !== false} fade={props.fade !== false}>
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
                                        <Button>
                                            <span>Read more</span>
                                            <i className="fa fa-chevron-right"> </i>
                                        </Button>
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