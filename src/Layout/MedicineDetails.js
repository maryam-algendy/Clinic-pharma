import React, {useEffect, useState} from 'react';
import { Tabs, Tab, Modal, Spinner, Button, Image, Nav } from "react-bootstrap";
import DOMPurify from 'dompurify';

// style
import './style/MedicineDetails.scss';

// component
import PageHeader from "./component/PageHeader";
import {useDispatch} from "react-redux";
import {addToCart} from "../actions";
import API from "../utilize/API";
import {Link} from "react-router-dom";
import storage from "../utilize/storage";

export default function MedicineDetails(props) {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(false);
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [displayedImage, setDisplayedImage] = useState("");
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [related, setRelated] = useState(false);
    const slug = props.location.pathname.replace("/shop/", "");
    const [loading, setLoading] = useState(true);

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }


    useEffect(() => {
        API(`medicine/?product=${slug}`)
            .then(({data, status}) => {
                if (status === 200) {
                    setProduct(data?.product);
                    setDisplayedImage(`${data?.product?.photos[0]?.photo?.replace("http", "https")}`);
                    setLoading(false);
                } else {
                    setProduct(data.message);
                    setLoading(false);
                }
            });


        if (storage("access-token")) {
            setAuth(true)
        }
    }, [slug]);

    useEffect(() => {
        API(`medicines/related/?product=${slug}`)
        .then(({data, status}) => {
            if (status === 200) {
                setRelatedProduct(data?.products);
                if (relatedProduct.length > 0) {
                    setRelated(true);
                    setLoading(false);

                }
            } else {
                setRelatedProduct(data.message);
                setLoading(false);
                setRelated(false)
            }
        })
    }, [relatedProduct])

    return (
        <div id="medicine-details">
            {/** Modal */}
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

                        <Button onClick={() => {
                            setShow(false);
                            window.location.href = "/shop";
                        }}>
                            continue shopping
                        </Button>

                        <Button onClick={() => {
                            setShow(false);
                            window.location.href = "/cart";
                        }}>
                            Go to Cart
                        </Button>

                    </Modal.Body>
                    :
                    <Modal.Body className="text-center py-5">
                        <h4>you must log in first</h4>
                        <Link to="/account/login">log in </Link>
                    </Modal.Body>
                }
            </Modal>
            {
                !loading ? <>
                        <PageHeader title="Medical Product Title" firstLocation="Shop" secondLocation="Medical Product Title"/>
                        <div className="container">
                            <div className="row">
                                <div className={related ? `col-12 col-md-9 col-lg-9 order-2 order-md-1 pr-lg-4` : `col-12`}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="img-view">
                                                <img className="active" src={displayedImage} alt="Active"/>
                                            </div>
                                            <div className="sub-img">
                                                {
                                                    product?.photos?.map((photo, id) => {
                                                        return (
                                                            <div key={id}
                                                                 onClick={() => setDisplayedImage(`${photo.photo}`)}
                                                                 className="img">
                                                                <img src={photo?.photo?.replace("http", "https")}
                                                                     alt="Shop"/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="content">
                                                <h5 className="title">{product?.name}</h5>
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
                                                    <span>Availability: <span
                                                        className="Availability">{product.quantity > 0 ? "Instock" : "out of stock"}</span></span>
                                                    <p className="description"
                                                       dangerouslySetInnerHTML={createMarkup(product?.about)}></p>
                                                </div>
                                                <div className="btn">
                                <span className="quantity">
                                    <button
                                        onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)}>-</button>
                                    <button className="counter">{quantity}</button>
                                    <button
                                        onClick={() => quantity === product.quantity ? product.quantity : setQuantity(quantity + 1)}>+</button>
                                </span>
                                                    <button className="add-to-cart" onClick={() => {
                                                        dispatch(addToCart({product: slug, quantity}));
                                                        setShow(true);
                                                    }}>Add To Cart
                                                    </button>
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
                                                    <div dangerouslySetInnerHTML={createMarkup(product?.description)}></div>
                                                </Tab>
                                                <Tab eventKey="indications" title="Indications">
                                                    <div dangerouslySetInnerHTML={createMarkup(product?.indications)}></div>
                                                </Tab>
                                                <Tab eventKey="sideEffects" title="Side Effects">
                                                    <div dangerouslySetInnerHTML={createMarkup(product?.sideEffects)}></div>
                                                </Tab>
                                                <Tab eventKey="reviews" title="Reviews(1)">
                                                    <p className="description">Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit. Accusamus aspernatur dolore doloribus eveniet
                                                        molestiae odit officiis unde voluptate! Accusamus atque aut commodi
                                                        dignissimos enim et nam nostrum saepe tempora temporibus? Lorem
                                                        ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda
                                                        commodi in mollitia nisi obcaecati quas quasi ratione soluta.</p>
                                                </Tab>
                                                <Tab eventKey="contraindicationsAndWarnings"
                                                     title="Contraindications and Warnings">
                                                    <div
                                                        dangerouslySetInnerHTML={createMarkup(product?.contraindicationsAndWarnings)}></div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                        <div className="leave-comment-box">
                                            <h5 className="title">Leave a Comment</h5>
                                            <div className="line"></div>

                                            <textarea name="leave-comment" id="leave-comment"/>
                                            <button>Send</button>
                                        </div>
                                    </div>
                                </div>
                                <></>

                                {related ?
                                    <div className={`col-12 col-md-3 col-lg-3 order-1 order-md-2`} id="shop-filters">
                                        <div className="related-products">
                                            <h3>Related Products</h3>
                                            {
                                                relatedProduct?.map(item => {
                                                    return (
                                                        <Link style={{ color: "inherit" }} to={`/shop/${item.slug}`} className="text-decoration-none product row">
                                                            <div className="col-4 lhs">
                                                                <Image src={item.thumbnail}/>
                                                            </div>
                                                            <div className="col-8 rhs">
                                                                <p>{item.name}</p>
                                                                <div className="icons">
                                                                    <i className="fas fa-star"> </i>
                                                                    <i className="fas fa-star"> </i>
                                                                    <i className="fas fa-star"> </i>
                                                                    <i className="fas fa-star"> </i>
                                                                    <i className="fas fa-star"> </i>
                                                                </div>
                                                                <span className="cost">{item.price} LE</span>
                                                            </div>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </>
                    :
                    <div id="loading">
                        <div className="spinner-border text-primary m-auto" role="status">
                            <span className="visually-hidden sr-only">Loading...</span>
                        </div>
                    </div>
            }
        </div>
    );
}
