import React from 'react';

// style
import './style/Medicine.scss';

export default function Medicine(props)
{
    return(
        <div id="medicine">
            <div className="products-img">
                <img className="shop-img" src={props.image} alt={props.alter} />
                <div className="overlay">
                    <i className="flaticon-shopping-cart"> </i>
                </div>
            </div>
            <div className="content">
                <h5 className="title">{props.title}</h5>
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