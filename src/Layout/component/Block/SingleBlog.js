import React from 'react';

// style
import "./style/SingleBlog.scss";
import {Link} from "react-router-dom";

export default function SingleBlog ()
{
    return (
        <div className="single-blog-container">
            <div className="img-side">
                <img className="img-fluid" src="/blog1.jpg" />
                <span className="date">20 June</span>
            </div>
            <div className="content">
                <h3>My Dental Office BLO Ee Are Building And Cousderty Community One Individual At A Time</h3>
                <p>Fummy text of the prnting and type news seting industrs standard known prin aretertok a printing and typen ews galley type. Ut wisi ad minim veniam , quis laore nostrud exerci tation ulm hedi corper turet ipsum dolor dit amet, consectetuer adipiscemy nibh euismodolre</p>
                <span className="author">
                    <i className="flaticon-people"> </i>
                    by 
                    <Link to="/">admin</Link>
                </span>
                <span className="comment">
                <i className="flaticon-interface"> </i>
                15
                </span>
            </div>
        </div>
    );
}