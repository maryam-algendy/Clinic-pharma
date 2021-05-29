import React from "react";
import {Button, Carousel} from "react-bootstrap";
//style
import "./style/Slider.scss";

export default function Slider(props) {
    return (
        <div id="slider">
            {props?.slides?.length !== 0 ? <Carousel controls={props.controls !== true} indicators={props.indicators !== false}
                       fade={props.fade !== false}>
                {props?.slides?.map((slide, id) =>
                    <Carousel.Item key={id}>
                        <img src={slide?.image.includes("https") ? slide?.image : slide?.image?.replace("http://", "https://")} alt={slide.description} className="img-fluid"/>
                        <div className="header text-center text-md-left">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-5">
                                        <h1>{slide?.title}</h1>
                                        <p>{slide?.description}</p>
                                        <Button onClick={() => window.location.href = slide?.link}>
                                            <span>{slide?.textOnLink}</span>
                                            <i className="fa fa-chevron-right"> </i>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                )}
            </Carousel> : <div id="loading">
                <div className="spinner-border text-primary m-auto" role="status">
                    <span className="visually-hidden sr-only">Loading...</span>
                </div>
            </div>}
        </div>
    );
}
