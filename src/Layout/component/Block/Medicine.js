import React, {useEffect, useState} from 'react';

// style
import './style/Medicine.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import storage from "../../../utilize/storage";
import {loadCart} from "../../../actions";
import {Button, Modal, Spinner} from "react-bootstrap";

export default function Medicine(props) {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        if (storage("access-token")) {
            setAuth(storage("user")?.tokens[0]?.token === storage("access-token"));
        }
        dispatch(loadCart());
    }, [dispatch])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="medicine">
            <div className="products-img">
                <img className="shop-img" src={props.image} alt={props.alter}/>
                <div className="overlay">
                    <div className="favourite">
                        <Button className="heart-btn" onClick={handleShow}>
                            <i className="flaticon-shopping-cart"> </i>
                        </Button>
                        {
                            auth ?
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Body className="text-center">
                                        <div className="header text-center">
                                            <Spinner animation="border" role="status"></Spinner>
                                            <span>
                <svg width="60" height="60" className="check">
                    <line fill="none" id="svg_1" stroke="#396cf0" strokeWidth="5"
                          transform="rotate(-34.7186 10.457 35.115)" x1="10.45705" x2="10.45705" y1="24.60471"
                          y2="45.62539"/>
                    <path d="m13.14288,42.96428l45.14286,-30.57143" fill="none" id="svg_2" stroke="#396cf0"
                          strokeWidth="5"/>
                </svg>
                </span>
                                        </div>
                                        <h4>{props.title}</h4>
                                        <p>is added to cart !</p>
                                        <Button onClick={handleClose}>ok</Button>
                                    </Modal.Body>
                                </Modal>
                                :
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Body className="text-center py-5">
                                        <h4>you must log in first</h4>
                                        <Link to="/account/login">log in </Link>
                                    </Modal.Body>
                                </Modal>
                        }

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