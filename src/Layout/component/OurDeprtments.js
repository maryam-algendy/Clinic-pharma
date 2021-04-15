import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// style
import './style/OurDeprtments.scss';

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

    return(
        <div id="our-departments">
            <div className="container">
                <div className="content">
                    <h5 className="title">Our Departments</h5>
                    <span className="sub-title">Dedicated Services</span>
                    <div className="line"> </div>
                </div>
                <div className="alice-carousel">
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
                        <div className="alice-content">
                            <i className="flaticon-medical icon-med"> </i>
                            <span className="number">01.</span>
                            <h5 className="title">Dental Care</h5>
                            <p className="description">Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced</p>
                            <button className="read-btn">Read More</button>
                            <i className="fas fa-long-arrow-alt-right"> </i>
                        </div>
                        <div className="alice-content">
                            <i className="flaticon-pills icon-med"> </i>
                            <span className="number">02.</span>
                            <h5 className="title">Medicine</h5>
                            <p className="description">Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced</p>
                            <button className="read-btn">Read More</button>
                            <i className="fas fa-long-arrow-alt-right"> </i>
                        </div>
                        <div className="alice-content">
                            <i className="flaticon-medical-5 icon-med"> </i>
                            <span className="number">03.</span>
                            <h5 className="title">Cardeology</h5>
                            <p className="description">Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced</p>
                            <button className="read-btn">Read More</button>
                            <i className="fas fa-long-arrow-alt-right"> </i>
                        </div>
                        <div className="alice-content">
                            <i className="flaticon-human-hip icon-med"> </i>
                            <span className="number">04.</span>
                            <h5 className="title">Orthopedic</h5>
                            <p className="description">Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced</p>
                            <button className="read-btn">Read More</button>
                            <i className="fas fa-long-arrow-alt-right"> </i>
                        </div>
                        <div className="alice-content">
                            <i className="flaticon-medical icon-med"> </i>
                            <span className="number">05.</span>
                            <h5 className="title">Dental Care</h5>
                            <p className="description">Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced</p>
                            <button className="read-btn">Read More</button>
                            <i className="fas fa-long-arrow-alt-right"> </i>
                        </div>
                        <div className="alice-content">
                            <i className="flaticon-pills icon-med"> </i>
                            <span className="number">06.</span>
                            <h5 className="title">Medicine</h5>
                            <p className="description">Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced</p>
                            <button className="read-btn">Read More</button>
                            <i className="fas fa-long-arrow-alt-right"> </i>
                        </div>
                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
}