import React, {useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// style
import './style/OurDeprtments.scss';

// block
import DepartmentBox from "./Block/DepartmentBox";
import API from "../../utilize/API";

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

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        API("cms/departments", "GET")
            .then(({data, status}) => {
                if (status === 200) {
                    setData(data?.departments);
                    setLoading(false);
                } else {
                    setError(data?.message);
                    setLoading(false);
                }
            })
    }, [])

    return(
        <div id="our-departments">
            <div className="container">
                {error ? <div className="alert-danger">{error}</div> : null}
                {!loading ? <>
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
                        infinite={true}
                    >
                        {data?.map((departments, i) => {
                            return <div key={i}>
                                <DepartmentBox departments={i + 1} title={departments.title} icon={departments.icon} description={departments.description} textOnLink={departments.textOnLink} />
                            </div>
                        })}
                    </AliceCarousel>
                </div>
                </>  :<div id="loading">
                    <div className="spinner-border text-primary m-auto" role="status">
                        <span className="visually-hidden sr-only">Loading...</span>
                    </div>
                </div>}
            </div>
        </div>
    );
}