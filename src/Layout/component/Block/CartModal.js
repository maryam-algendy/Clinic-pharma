import React ,{useState} from 'react';
import {Modal ,Button,Spinner} from 'react-bootstrap';

//style
import "./style/CartModal.scss"
export default function  CartModal (props){
    const [show, setShow] = useState(false);
    const [color, setColor] = useState("heart");

    const handleClose = () => setShow(false);
    const onbtnClick =()=>
    {
        if (color==="heart"){
            setColor("clicked")
            setShow(true);
        }

    }

    return (
        <div className="favourite">
            <Button className="heart-btn" onClick={onbtnClick}>
                <i className="flaticon-shopping-cart"> </i>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className="header text-center">
                        <Spinner animation="border" role="status"></Spinner>
                        <span>
                <svg width="60" height="60" className="check">
                    <line fill="none" id="svg_1" stroke="#66a8a6" strokeWidth="5" transform="rotate(-34.7186 10.457 35.115)" x1="10.45705" x2="10.45705" y1="24.60471" y2="45.62539"/>
                    <path d="m13.14288,42.96428l45.14286,-30.57143" fill="none" id="svg_2" stroke="#66a8a6" strokeWidth="5"/>
                </svg>
                </span>
                    </div>
                    <h4>{props.item}</h4>
                    <p>is added to cart !</p>
                    <Button onClick={handleClose}>ok</Button>
                </Modal.Body>
            </Modal>
        </div>
    );

}


