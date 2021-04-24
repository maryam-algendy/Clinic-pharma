import React from 'react';
import "./style/SingleBlog.scss";

export default function SingleBlog ()
{
    return (
        <div className="blog-contianer">
            <div className="img-side">
                <img src="/blog1.jpg" />
                <span className="date">20 June</span>
            </div>
            <div className="content">
                <h3>My Dental Office BLO Ee Are Building And Cousderty Community One Individual At A Time</h3>
                <p>Fummy text of the prnting and type news seting industrs standard known prin aretertok a printing and typen ews galley type. Ut wisi ad minim veniam , quis laore nostrud exerci tation ulm hedi corper turet ipsum dolor dit amet, consectetuer adipiscemy nibh euismodolre</p>
                <span className="author">
                    <i className="fas fa-user"></i>
                    by 
                    <span>admin</span>
                </span>
                <span className="comment">
                <i className="far fa-comments"></i>
                15
                </span>
            </div>
        </div>
    );
}