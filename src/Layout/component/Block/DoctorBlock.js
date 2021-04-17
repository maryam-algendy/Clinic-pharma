import React from 'react';

// style
import './style/DoctorBlock.scss';
import {Link} from "react-router-dom";

export default function DoctorBlock(props)
{
    return(
        <div id="doctors-block">
            <div className="doctors-card">
                <div className="doc-img">
                    <img src={props.image} alt={props.alter}/>
                    <Link to={`/doctor/${props.title}`} className="overlay">+</Link>
                </div>
                <div className="content">
                    <h5 className="title">{props.title}</h5>
                    <span>{props.span}</span>
                </div>
                <div className="dropdown-divider"> </div>
                <div className="date-time">
                    <div className="date">
                        <span>Mon - Tues</span>
                        <span>Fri - Sat</span>
                        <span>Sun - Mon</span>
                    </div>
                    <div className="time">
                        <span>08.00 : 17.00</span>
                        <span>09.00 : 12.00</span>
                        <span>08.00 : 17.00</span>
                    </div>
                </div>
                <div className="btn">
                    <button>Make An Appointment</button>
                </div>
            </div>
        </div>
    );
}