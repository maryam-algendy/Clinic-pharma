import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// style
import './style/TopDoctors.scss';

// block
import DoctorBlock from "./Block/DoctorBlock";

export default function TopDoctors(props)
{
    const state = { galleryItems: [4], currentIndex: 0};

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 4}
    }

    const {galleryItems, currentIndex} = state;


    return(
        <div id="top-doctors">
            <div className="container">
                <div className="top-doctors-header">
                    <h5 className="title">Top Doctors</h5>
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
                        {props?.topDoctors?.map((doctor, i) => {
                            return <div key={i}>
                                <DoctorBlock doctors={i + 1} image={doctor.image} alt={doctor.alter} name={doctor.name} specialization={doctor.specialization} />
                            </div>
                        })}
                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
}
