import React from "react";
import {Button} from "react-bootstrap";

//style
import "./style/Testimonial.scss";

export default function Testimonial() {

    return (
        <div id="testimonial">
            <div className="overlay">
                <div className="inner-text">
                    <h3>testimonials</h3>
                    <div className="nav-btns">
                        <Button>
                            <i className="fas fa-angle-left"> </i>
                        </Button>
                        <Button>
                            <i className="fas fa-angle-right"> </i>
                        </Button>
                    </div>
                    {
                        [1, 2].map((item, id) => {
                                return (
                                    <div key={id} className="item">
                                        <p>
                                            josef ardogon
                                            <span> / CEO Artland</span>
                                        </p>
                                        <span className="rate">
                                            <i className="fas fa-star"> </i>
                                            <i className="fas fa-star"> </i>
                                            <i className="fas fa-star"> </i>
                                            <i className="fas fa-star"> </i>
                                            <i className="fas fa-star"> </i>
                                        </span>
                                        <i>"Eodem modo typi, qui nunc nobis videntur parum clar fiant sollemnes in futurum.
                                            Lorem ipsum dolor sit amet tetuer adipiscing elit, sed diam nonu."</i>
                                    </div>
                                )
                            }
                        )}
                </div>
            </div>
        </div>
    )
}