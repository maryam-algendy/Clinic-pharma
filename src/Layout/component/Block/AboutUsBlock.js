import React from "react";

//style
import "./style/AboutUsBlock.scss";
import {Image} from "react-bootstrap";

export default function AboutUsBlock(){
    return(
        <div id ="about-us-block">
            <h2>let's know short story about clinical pharma</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et eveniet expedita facilis libero perspiciatis,
                porro quidem reiciendis!
                Accusantium beatae dolor dolorum fugiat porro provident quaerat rerum totam veritatis vero.</p>
            <div className="row img-section">
                <div className="col-md-6">
                    <Image src="/about5.jpg"/>
                </div>
                <div className="col-md-6">
                    <Image src="/about6.jpg"/>
                    <i className="flaticon-play-button"></i>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium adipisci aliquid corporis dolores enim et laborum molestiae mollitia nihil non,
                omnis praesentium rem repudiandae sequi similique sint vitae. In, ullam.
                omnis praesentium rem repudiandae sequi similique sint vitae. In, ullam.
                omnis praesentium rem repudiandae sequi similique sint vitae. In, ullam.
                omnis praesentium rem repudiandae sequi similique sint vitae. In, ullam.
                omnis praesentium rem repudiandae sequi similique sint vitae. In, ullam.
            </p>
            <div className="row principles">
                <div className="col-md-6">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fas fa-angle-right"></i>
                            keep patient first
                        </li>
                        <li>
                            <i className="fas fa-angle-right"></i>
                            keep everyone safe
                        </li>
                        <li>
                            <i className="fas fa-angle-right"></i>
                            work together
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fas fa-angle-right"></i>
                            pursue excellence
                        </li>
                        <li>
                            <i className="fas fa-angle-right"></i>
                            manage your resources
                        </li>
                        <li>
                            <i className="fas fa-angle-right"></i>
                            keep learning
                        </li>
                    </ul>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur dolore doloribus ex illo incidunt ipsam,
                libero minus,
                quibusdam quod, voluptatem voluptatum. Commodi consequuntur eum necessitatibus placeat provident quidem voluptatem.</p>
        </div>
    )
}