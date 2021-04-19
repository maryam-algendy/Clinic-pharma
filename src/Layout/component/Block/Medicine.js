import React from 'react';

// style
import './style/Medicine.scss';
import {Link} from "react-router-dom";

export default function Medicine(props)
{
    return(
        <div id="medicine">
            <div className="products-img">
                <img className="shop-img" src={props.image} alt={props.alter} />
                <div className="overlay">
                    <button>
                        <i className="flaticon-shopping-cart"> </i>
                    </button>
                </div>
            </div>
            <div className="content">
                <Link to={`/shop/${props.title.toLowerCase().replace(" ", "-")}`}>
                    <h5 className="title">{props.title}</h5>
                </Link>
                <div className="icons">
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                </div>
                <span className="price">{props.price}</span>
            </div>
        </div>
    );
}