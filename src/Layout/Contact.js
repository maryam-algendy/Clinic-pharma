import React from "react";
import {Form, Button} from "react-bootstrap";

//style
import "./style/Contact.scss";

export default function Contact() {
    return (
        <div id="contact" className="container py-5">
            <div className="row">
                <div className="col-lg-8 lhs">
                    <h3>leave us message</h3>
                    <Form>
                        <div className="row">
                            <div className="col-sm-6">
                                <Form.Control placeholder="First Name *"/>
                            </div>
                            <div className="col-sm-6">
                                <Form.Control placeholder="Last Name *"/>
                            </div>
                            <div className="col-sm-6">
                                <Form.Control type="email" placeholder="E-mail *"/>
                            </div>
                            <div className="col-sm-6">
                                <Form.Control type="number" placeholder="phone *"/>
                            </div>
                        </div>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom>
                                <option>compliment</option>
                                <option>complaint</option>
                                <option>question</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Control placeholder="Message *" as="textarea" rows="6"/>
                        <Button>submit message</Button>
                    </Form>
                </div>
                <div className="col-lg-4 rhs">
                    <h3>contacts</h3>
                    <p>
                        <i className="far fa-envelope"> </i>
                        medical@pharma.com
                    </p>
                    <p>
                        <i className="fas fa-phone"> </i>
                        (+123) 884-4400
                    </p>
                </div>
            </div>
        </div>
    )
}