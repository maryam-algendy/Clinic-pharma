import React, {useEffect, useState} from 'react';

// style
import './style/Medicine.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import storage from "../../../utilize/storage";
import {addToCart, loadCart} from "../../../actions";
import {Button, Modal, Spinner} from "react-bootstrap";

export default function Medicine(props) {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (storage("access-token")) {
            setAuth(true)
        }
        dispatch(loadCart());
    }, [])

    return (
        <div id="medicine">
            <div className="products-img">
                <img className="shop-img" src={props.image.includes("https") ? props.image : props.image?.replace("http", "https")} alt={props.alter}/>
                <div className="overlay">
                    <div className="favourite">
                        <Button className="heart-btn" onClick={() => {
                            dispatch(addToCart({product: props.slug, quantity: 1}));
                            setShow(true)
                        }}>
                            <i className="flaticon-shopping-cart"> </i>
                        </Button>

                        <Modal show={show} onHide={() => setShow(false)}>
                            {auth ? <Modal.Body className="text-center">
                                <div className="header text-center">
                                    <Spinner animation="border" role="status"> </Spinner>
                                    <span>
                                        <svg width="60" height="60" className="check">
                                            <line fill="none" id="svg_1" stroke="#396cf0" strokeWidth="5"
                                                  transform="rotate(-34.7186 10.457 35.115)" x1="10.45705" x2="10.45705"
                                                  y1="24.60471" y2="45.62539"/>
                                            <path d="m13.14288,42.96428l45.14286,-30.57143" fill="none" id="svg_2"
                                                  stroke="#396cf0" strokeWidth="5"/>
                                        </svg>
                                    </span>
                                </div>
                                <h4>{props.title}</h4>
                                <p>is added to cart !</p>
                                <Button onClick={() => setShow(false)}>continue shopping</Button>
                                <Button onClick={() => {
                                    setShow(false);
                                    window.location.href = "/cart";
                                }}>
                                    Go to Cart
                                </Button>
                            </Modal.Body> : <Modal.Body className="text-center py-5">
                                <h4>you must log in first</h4>
                                <Link to="/account/login">log in </Link>
                            </Modal.Body>}
                        </Modal>

                    </div>
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