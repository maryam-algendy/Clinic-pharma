import React from "react";

// style
import "./style/Footer.scss";

export default function Footer()
{
    return(
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="pharma-logo">
                            <img src={"./transparent-logo.png"} alt="Pharma Logo"/>
                        </div>
                        <div className="content">
                            <span>We are ipsum dolor sit amet consectetuer adipiscing elitseder diam nonummy.</span>
                            <span><i className="fas fa-map-marker-alt"> </i>59 Street, 1200 Mansoura</span>
                            <span><i className="fas fa-phone"> </i>+59 888 555</span>
                            <span><i className="far fa-envelope"> </i>Contact@clinic.pharma</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="title">Department</h5>
                        <div className="line"> </div>
                        <div className="list">
                            <a href="/">Dental Care</a>
                            <a href="/">Medicine</a>
                            <a href="/">Orthopedic</a>
                            <a href="/">Emergency</a>
                            <a href="/">Skilled Doctors</a>
                            <a href="/">Certified Clinic</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="title">Quick links</h5>
                        <div className="line"> </div>
                        <div className="list">
                            <a href="/">About Us</a>
                            <a href="/">What We Do</a>
                            <a href="/">Faq's</a>
                            <a href="/">Appointment</a>
                            <a href="/">Contact</a>
                            <a href="/">24/7 Support</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="title">Stay informed</h5>
                        <div className="line"> </div>
                        <div className="contact-us">
                            <input className="input-text" type="text" placeholder="Enter Your E-mail..." />
                            <input className="btn" type="submit" value="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}