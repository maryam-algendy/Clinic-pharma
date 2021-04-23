 import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {PaymentInputsWrapper, usePaymentInputs} from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import swal from "sweetalert";
//style
import "./style/OnlinePayment.scss";
import PageHeader from "./component/PageHeader";
import API from "../utilize/API";
 import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
 import {useSelector} from "react-redux";

export default function OnlinePayment() {
    const {wrapperProps, getCardImageProps, getCardNumberProps, getCVCProps} = usePaymentInputs();

    const cart = useSelector(state => state.portal.cart);

    // get year, month and day separated
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    const years = Array.from(new Array(10), (val, index) => index + year);
    const months = Array.from(new Array(12), (val, index) => index + 1);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [form, setForm] = useState({number: "", exp_month: "", exp_year: "", cvc: "", currency: "usd", location: ""});
    console.log(form)
    function handlePayment() {
        API("checkout", "POST", form)
            .then(({data, status}) => {
                if (status === 200) {
                    swal({icon: "success", text: "Payed Successfully", buttons: false});
                    setTimeout(() => {
                        window.location.replace("/settings/orders");
                    }, 1500);
                } else {
                    swal({icon: "error", text: `${data?.message || "An error occurred, try again later!"}`, buttons: false});
                }
            })
    }

    return (
        <div id="online-payment">
            <PageHeader title="Online Payment" firstLocation="Online Payment"/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="p-4 lhs">
                            <Form method="post">
                                <h3>Card Data</h3>
                                <Form.Group controlId="nameOnCard">
                                    <Form.Label><h4>Card Holder</h4></Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Label><h4>Card Number</h4></Form.Label>
                                <PaymentInputsWrapper {...wrapperProps}>
                                    <svg {...getCardImageProps({images})} />
                                    <input {...getCardNumberProps()} value={form.number} onChange={(e) => setForm({...form, number: e.target.value})}/>
                                </PaymentInputsWrapper>

                                <div className="row">
                                    <Form.Group className="col-lg-4 col-md-6" controlId="SelectCustom">
                                        <Form.Label><h4>month</h4></Form.Label>
                                        <Form.Control as="select" custom onChange={(e) => setForm({...form, exp_month: e.target.value})}>
                                            {months.map((month, id) => <option key={id}>{String(month).padStart(2, '0')}</option>)}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-lg-4 col-md-6" controlId="SelectCustom2">
                                        <Form.Label><h4>year</h4></Form.Label>
                                        <Form.Control as="select" custom onChange={(e) => setForm({...form, exp_year: e.target.value})}>
                                            {years.map((year, id) => <option key={id}>{String(year).slice(2)}</option>)}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-lg-4 col-md-6">
                                        <Form.Label><h4>cvc</h4></Form.Label>
                                        <Form.Control  {...getCVCProps()} value={form.cvc} onChange={(e) => setForm({...form, cvc: e.target.value})}/>
                                    </Form.Group>
                                </div>

                                <hr/>
                                <h3>Shipping Data</h3>
                                <div className="row">
                                    <Form.Group className="col-lg-4 col-md-6">
                                        <Form.Label>
                                            <h4>Address</h4>
                                        </Form.Label>
                                        <Form.Control type="text" value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} />
                                    </Form.Group>

                                    <Form.Group className="col-lg-4 col-md-6" controlId="SelectCountry">
                                        <Form.Label>
                                            <h4>Country</h4>
                                        </Form.Label>
                                        <CountryDropdown blacklist={['IL']} value={form?.country} onChange={(country) => setForm({...form, country: country, government: ""})}/>
                                    </Form.Group>

                                    <Form.Group className="col-lg-4 col-md-6" controlId="SelectGovernment">
                                        <Form.Label>
                                            <h4>Government</h4>
                                        </Form.Label>
                                        <RegionDropdown disableWhenEmpty={true} country={form?.country} value={form?.government} onChange={(gov) => setForm({...form, government: gov})}/>
                                    </Form.Group>
                                </div>

                            </Form>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="rhs text-left">
                            <h3>order summary</h3>
                            <div className="products">
                                {cart?.products?.map(item => <p key={item._id} title={item?.product?.name}>
                                    <label>{item?.product?.name}</label>
                                    <span>{item?.quantity} × {"$" + item?.product?.price}</span>
                                </p>)}
                            </div>
                            <div className="py-3 date text-center">
                                <span>{days[new Date().getDay()]}</span>
                                <p>{monthsName[month]} {day} , {year} | {new Date().getHours() % 12}:{new Date().getMinutes()} {new Date().getHours() >= 12 ? 'pm' : 'am'}</p>
                            </div>
                        </div>
                        <Button className="my-4" onClick={() => handlePayment()}>purchase now</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}