import React, {useState} from 'react';
import {Tabs, Tab} from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";

// style
import './style/MedicineDetails.scss';

// component
import PageHeader from "./component/PageHeader";

export default function MedicineDetails()
{
    const [quantity, setQuantity] = useState(1);

    const state = { galleryItems: [4], currentIndex: 0};

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 4}
    }

    const {galleryItems, currentIndex} = state;

    const products = [
        {image: "./shop1.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop2.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop3.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop4.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop1.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop2.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"}
    ]

    return(
        <div id="medicine-details">
            <PageHeader title="Medical Product Title" firstLocation="Shop" secondLocation="Medical Product Title" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="img-view">
                            <img className="active" src="/shop1-01.png" alt="Shop"/>
                        </div>
                        <div className="sub-img">
                            <div className="img">
                                <img src="/shop2.png" alt="Shop"/>
                            </div>
                            <div className="img">
                                <img src="/shop3.png" alt="Shop"/>
                            </div>
                            <div className="img">
                                <img src="/shop4.png" alt="Shop"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="content">
                            <h5 className="title">Medical Product Title</h5>
                            <div className="icons">
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                            </div>
                            <div className="details">
                                <span className="price">$59.00</span>
                                <span className="seller">
                                    Seller: <a href="/">Clinic Number</a>
                                </span>
                                <span>SKU: <span className="code">SB0059</span></span>
                                <span>Availability: <span className="Availability">Instock</span></span>
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
                        <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                            <Tab eventKey="description" title="Description">
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolore doloribus eveniet molestiae odit officiis unde voluptate! Accusamus atque aut commodi dignissimos enim et nam nostrum saepe tempora temporibus?</p>
                                <div className="tab-list">
                                    <ul className="list">
                                        <li>Seat Height - Floor to Seat: 24"</li>
                                        <li>Frame Material: Wood</li>
                                        <li>Seat Material: Wood</li>
                                        <li>Adjustable Height: No</li>
                                        <li>Overall: 24" H x 17" W x 14" D</li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab eventKey="reviews" title="Reviews(3)">
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolore doloribus eveniet molestiae odit officiis unde voluptate! Accusamus atque aut commodi dignissimos enim et nam nostrum saepe tempora temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi in mollitia nisi obcaecati quas quasi ratione soluta.</p>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="carousel">
                        <div className="carousel-description">
                            <h5 className="title">Related Products</h5>
                            <div className="line"> </div>
                        </div>
                        <AliceCarousel
                            items={galleryItems}
                            responsive={responsive}
                            autoPlayInterval={1000}
                            fadeOutAnimation={false}
                            dotsDisabled={true}
                            buttonsDisabled={true}
                            touchTrackingEnabled={true}
                            mouseTrackingEnabled={true}
                            slideToIndex={currentIndex}
                        >
                            {products.map((product, id) => {
                                return(
                                    <div key={id} className="carousel-products">
                                        <div className="products">
                                            <img className="shop-img" src={product.image} alt={product.alter} />
                                            <div className="overlay">
                                                <button>
                                                    <i className="flaticon-shopping-cart"> </i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">{product.title}</h5>
                                            <div className="icons">
                                                <i className="fas fa-star"> </i>
                                                <i className="fas fa-star"> </i>
                                                <i className="fas fa-star"> </i>
                                                <i className="fas fa-star"> </i>
                                                <i className="fas fa-star"> </i>
                                            </div>
                                            <span className="price">{product.price}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </AliceCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}