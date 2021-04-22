import React, {useEffect, useState} from "react";
import {Form, Button, FormControl, Image} from "react-bootstrap";
//style
import "./style/Cart.scss";
import API from "../utilize/API";
import PageHeader from "./component/PageHeader";

export default function Cart() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        API("medicine")
            .then(({data, status}) => {
                if (status === 200) {
                    setProducts(data?.products);
                    console.log(data)
                } else {
                    setError(data.message);
                }
            })

    }, []);
    const [quantity, setQuantity] = useState(1);

    function countUp(q, id) {
        const newQuantity = parseInt(q)
        setQuantity(newQuantity + 1);
        products[id].quantity = newQuantity + 1;
        products[id].total = (products[id].price * products[id].quantity).toFixed(2)
    }

    const countDown = (q, id) => {
        if (quantity > 1) {
            const newQuantity = parseInt(q);
            setQuantity(newQuantity - 1);
            products[id].quantity = newQuantity - 1;
            products[id].total = (products[id].total - products[id].price).toFixed(2);
        }
    }
    return (
        <div id="cart">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Cart"/>
            <div className="cart-items">
                <div className="row th">
                    <div className="col-2"><span></span></div>
                    <div className="col-3">PRODUCT</div>
                    <div className="col-1">PRICE</div>
                    <div className="col-3">quantity</div>
                    <div className="col-1">TOTAL</div>
                </div>
                {
                    products.map((product, id) => {
                        return (
                            <div key={id} className="row tb">
                                <div className="col-2"><Image src={product.link}/></div>
                                <div className="col-5">{product.name}</div>
                                <div className="col-1">${product.price}</div>
                                <div className="col-3">
                                    <div className="quantity">
                                        <Button onClick={() => {
                                            countDown(product.quantity, id)
                                        }}>-</Button>
                                        <span id="val">{products[id].quantity}</span>
                                        <Button onClick={() => {
                                            countUp(product.quantity, id);
                                        }}>+</Button>
                                    </div>
                                </div>
                                <div className="col-1">${product.total}</div>
                            </div>
                        )
                    })
                }
                <div className="confirm">
                    <FormControl placeholder="Coupon Code"/>
                    <Button>APPLY COUPON</Button>
                    <Button>UPDATE CART</Button>
                </div>
            </div>
            <div className="cart-total container px-xl-0">
                <div className=" content">
                    <h5>CART TOTALS</h5>
                    <div className="row">
                        <div className="col-4">
                            <span>Subtotal:</span>
                        </div>
                        <div className="col-8">
                            <span>$39.00</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <span>Shipping:</span>
                        </div>
                        <div className="col-8">
                            <p>There are no shipping methods available.
                                Please double check your address, or contact us if you need any help.</p>
                            <label>CALCULATE SHIPPING</label>
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Control as="select" custom>
                                        <option>select a country</option>
                                        <option>US</option>
                                        <option>UK</option>
                                        <option>Jaban</option>
                                    </Form.Control>
                                    <Form.Control type="text" placeholder="state/ country"/>
                                    <Form.Control type="text" placeholder="Postcode / Zip"/>
                                    <Button>update totals</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <span>Total:</span>
                        </div>
                        <div className="col-8">
                            <span>$39.00</span>
                        </div>
                    </div>
                    <Button>proceed to checkout</Button>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    )
}