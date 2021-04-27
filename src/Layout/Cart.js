import React from "react";
import {Form, Button, Image} from "react-bootstrap";
//style
import "./style/Cart.scss";
import PageHeader from "./component/PageHeader";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions";
import {Link} from "react-router-dom";

export default function Cart() {
    const cart = useSelector(state => state.portal.cart);
    const dispatch = useDispatch();

    return (
        <div id="cart">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Cart"/>
            {typeof cart?.products !== "undefined" ? <>
                <div className="cart-items">
                    <div className="row th">
                        <div className="col-2">
                            <span> </span>
                        </div>
                        <div className="col-3">
                            PRODUCT
                        </div>
                        <div className="col-1">
                            PRICE
                        </div>
                        <div className="col-3">
                            quantity
                        </div>
                        <div className="col-1">
                            TOTAL
                        </div>
                    </div>
                    {
                        cart?.products?.map((item, id) => {
                            console.log(item.product)
                            return (
                                <div key={id} className="row tb">
                                    <div className="col-2">
                                        <Image className="img-fluid" src={item.product?.thumbnail}/>
                                    </div>

                                    <div className="col-5 name">
                                        {item.product.name}
                                    </div>

                                    <div className="col-1">
                                        {"$" + item.product.price}
                                    </div>

                                    <div className="col-3">
                                        <div className="quantity">
                                            <Button onClick={() => item.quantity === 1 ? null : dispatch(addToCart({
                                                product: item.product.slug,
                                                quantity: parseInt(item.quantity - 1)
                                            }))}>-</Button>
                                            <span id="val">{item?.quantity}</span>
                                            <Button onClick={() => dispatch(addToCart({
                                                product: item.product.slug,
                                                quantity: parseInt(item.quantity + 1)
                                            }))}>+</Button>
                                        </div>
                                    </div>
                                    <div className="col-1">{"$" + item.quantity * item.product.price}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-total container px-xl-0">
                    <div className=" content">
                        <h5>CART TOTALS</h5>
                        <div className="row">
                            <div className="col-4">
                                <span>Coupon:</span>
                            </div>
                            <div className="col-8">
                                <p>There are no coupons applied. If you have a coupon please apply it below.</p>
                                <label>CALCULATE DISCOUNT</label>
                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control type="text" placeholder="ex: a12B34"/>
                                        <Button>Apply</Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <span>Total:</span>
                            </div>
                            <div className="col-8">
                                <span>{"$" + cart?.total}</span>
                            </div>
                        </div>
                        <Button onClick={() => window.location.href = "/checkout"}>proceed to checkout</Button>
                    </div>
                    <div className="clear"></div>
                </div>
            </> : <div className="container empty-flag">
                Your cart is empty
                <Link to="/shop">Go to Shop!</Link>
            </div>}
        </div>
    )
}