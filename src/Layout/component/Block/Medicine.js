import React, {useEffect, useState} from 'react';

// style
import './style/Medicine.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import storage from "../../../utilize/storage";
import {loadCart} from "../../../actions";
import CartModal from "./CartModal";

export default function Medicine(props)
{
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        if (storage("access-token")) {
            setAuth(storage("user")?.tokens[0]?.token === storage("access-token"));
        }
        dispatch(loadCart());
    }, [dispatch])


    return(
        <div id="medicine">
            <div className="products-img">
                <img className="shop-img" src={props.image} alt={props.alter} />
                <div className="overlay">
                        <CartModal item={props.title}/>
                </div>
            </div>
            <div className="content">
                <Link to={`/shop/${props.slug}`}>
                    <h5 className="title">{props.title}</h5>
                </Link>
                <div className="icons">
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                </div>
                <span className="price">${props.price.toFixed(2)}</span>
            </div>
        </div>
    );
}