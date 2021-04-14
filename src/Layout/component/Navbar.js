import React, {useEffect, useState} from "react";
import {Navbar} from 'react-bootstrap';

// block
import UserSection from './Block/UserSection'

// style
import "./style/Navbar.scss";

export default function MainNavbar()
{
    const [userSection, setUserSection] = useState(false);

    useEffect(() => {
        document.addEventListener("click", () => {
            if(userSection)
                setUserSection(false);
        });
    }, [userSection]);

    return(
        <div id="navbar">
            <Navbar expand="lg">
                <div className="container">
                    <div className="logo">
                        <img className="clinic-logo" src={"./background-logo.jpg"} alt="Clinic Logo" />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="blocks">
                            <ul className="nav-list">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Departments</a></li>
                                <li><a href="/">Doctors</a></li>
                                <li><a href="/">Shop Medicines</a></li>
                                <li><a href="/">Blogs</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="icons">
                            <button className="icon"><i className="flaticon-search"> </i></button>
                            <button className="icon"><i className="flaticon-shopping-cart"> </i></button>
                            <span className="counter">2</span>
                            <button className="btn">Appointment</button>
                            <img
                                className="user-logo"
                                src={"./user.png"}
                                alt="User Section"
                                onClick={(e) => {
                                    if(userSection)
                                    {
                                        setUserSection(true);
                                    } else
                                        {
                                            e.stopPropagation();
                                        }
                                    setUserSection(!userSection);
                                }}
                            />
                            <UserSection userSection={userSection} />
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}