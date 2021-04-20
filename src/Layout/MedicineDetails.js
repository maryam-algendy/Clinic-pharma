import React, {useEffect, useState} from 'react';
import {Tabs, Tab} from "react-bootstrap";

// style
import './style/MedicineDetails.scss';

// component
import PageHeader from "./component/PageHeader";
import API from "../utilize/API";

export default function MedicineDetails(props)
{
    const [quantity, setQuantity] = useState(1);
    const [displayedImage, setDisplayedImage] = useState();

    const slug =props.location.pathname.slice(6);
    const [product, setProduct]=useState([]);

    useEffect(()=>{
        API(`medicine/${slug}`).then(({data, status})=>{
            if (status===200){
                setProduct(data?.product);
                setDisplayedImage(`${data.product.photos[0].photo}`);

            }
            else {
                setProduct(data.message);
            }
        })
    },[])


    return(
        <div id="medicine-details">
            <PageHeader title="Medical Product Title" firstLocation="Shop" secondLocation="Medical Product Title" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="img-view">
                            <img className="active" src={displayedImage} alt="Shop"/>
                        </div>
                        <div className="sub-img">
                            {
                                product?.photos?.map((photo,id)=>{
                                    return(
                                        <div key={id} onClick={() => setDisplayedImage(`${photo.photo}`)} className="img">
                                            <img src={photo.photo} alt="Shop"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="content">
                            <h5 className="title">{product.name}</h5>
                            <div className="icons">
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                            </div>
                            <div className="details">
                                <span className="price">${product.price?.toFixed(2)}</span>
                                <span className="seller">
                                    Seller: <a href="/">{product?.owner?.username}</a>
                                </span>
                                <span>SKU: <span className="code">SB0059</span></span>
                                <span>Availability: <span className="Availability">{product.quantity > 0?"Instock":"out of stock"}</span></span>
                                <p className="description">Working from home meant we cloudsnack and coffee our breaks change our desks or views, good, drink on the job, even spend the weather started getting.</p>
                            </div>
                            <div className="btn">
                                <span className="quantity">
                                    <button onClick={() => quantity === 1 ? setQuantity(1) :setQuantity(quantity - 1)}>-</button>
                                    <button className="counter">{quantity}</button>
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                </span>
                                <button className="add-to-cart">Add To Cart</button>
                                <i className="fas fa-exchange-alt"> </i>
                                <i className="fas fa-heart"> </i>
                            </div>
                            <div className="social-icons">
                                <div className="social-links">
                                    <span>Share With: </span>
                                    <i className="fab fa-facebook-f"> </i>
                                    <i className="fab fa-twitter"> </i>
                                    <i className="fab fa-linkedin-in"> </i>
                                    <i className="fab fa-pinterest-p"> </i>
                                    <i className="fab fa-skype"> </i>
                                    <i className="fab fa-youtube"> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs">
                        <Tabs defaultActiveKey="description" id="clinic-pharma-tab">
                            <Tab eventKey="description" title="Description">
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolore doloribus eveniet molestiae odit officiis unde voluptate! Accusamus atque aut commodi dignissimos enim et nam nostrum saepe tempora temporibus?</p>
                                <ul className="list">
                                    <li>Seat Height - Floor to Seat: 24"</li>
                                    <li>Frame Material: Wood</li>
                                    <li>Seat Material: Wood</li>
                                    <li>Adjustable Height: No</li>
                                    <li>Overall: 24" H x 17" W x 14" D</li>
                                </ul>
                            </Tab>
                            <Tab eventKey="indications" title="Indications">
                                <ul className="list">
                                    <li>Seat Height - Floor to Seat: 24"</li>
                                    <li>Frame Material: Wood</li>
                                    <li>Seat Material: Wood</li>
                                    <li>Adjustable Height: No</li>
                                    <li>Overall: 24" H x 17" W x 14" D</li>
                                </ul>
                            </Tab>
                            <Tab eventKey="sideEffects" title="Side Effects">
                                <ul className="list">
                                    <li>Seat Height - Floor to Seat: 24"</li>
                                    <li>Frame Material: Wood</li>
                                    <li>Seat Material: Wood</li>
                                    <li>Adjustable Height: No</li>
                                    <li>Overall: 24" H x 17" W x 14" D</li>
                                </ul>
                            </Tab>
                            <Tab eventKey="reviews" title="Reviews(1)">
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolore doloribus eveniet molestiae odit officiis unde voluptate! Accusamus atque aut commodi dignissimos enim et nam nostrum saepe tempora temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi in mollitia nisi obcaecati quas quasi ratione soluta.</p>
                            </Tab>
                            <Tab eventKey="contraindicationsAndWarnings" title="Contraindications and Warnings">
                                <ul className="list">
                                    <li>Seat Height - Floor to Seat: 24"</li>
                                    <li>Frame Material: Wood</li>
                                    <li>Seat Material: Wood</li>
                                    <li>Adjustable Height: No</li>
                                    <li>Overall: 24" H x 17" W x 14" D</li>
                                </ul>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="leave-comment-box">
                        <h5 className="title">Leave a Comment</h5>
                        <div className="line"> </div>

                        <textarea name="leave-comment" id="leave-comment" />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}