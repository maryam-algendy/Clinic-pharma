import React from "react";

// style
import "./style/Appointment.scss";

// component
import PageHeader from "./component/PageHeader";
import {Button, Form} from "react-bootstrap";

export default function Appointment()
{
    return <div id="appointment">
        <PageHeader title="Appointment Form" firstLocation="Form" />
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="content">
                        <h3 className="title">Make An Appointment</h3>
                        <div className="line"> </div>
                        <p className="description">Efficiently myocardinate market-driven innovation via open-source alignment. Dramatically engage porescently.</p>
                        <Form>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Form.Group className="select-group" controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom>
                                            <option>Select Department*</option>
                                            <option>Dental</option>
                                            <option>Gynaecology</option>
                                            <option>Eye</option>
                                            <option>Cardiology</option>
                                            <option>Orthopaedics</option>
                                            <option>Gastroenterology</option>
                                            <option>Neurology</option>
                                            <option>Medicine</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-sm-12">
                                    <Form.Group className="select-group" controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom>
                                            <option>Choose Doctor by Name*</option>
                                            <option>Dr. Zinia Zara</option>
                                            <option>Dr. Nadim Kamal</option>
                                            <option>Dr. Rihana Roy</option>
                                            <option>Dr. Jason Roy</option>
                                            <option>Dr. Steven Jobs</option>
                                            <option>Dr. Johora Ray</option>
                                            <option>Dr. Rihana Roy</option>
                                            <option>Dr. Nadim Kamal</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-sm-12">
                                    <Form.Control type="text" placeholder="Patient Name*"/>
                                </div>
                                <div className="col-sm-6">
                                    <Form.Control type="number" placeholder="Phone*"/>
                                </div>
                                <div className="col-sm-6">
                                    <Form.Control type="email" placeholder="Email*"/>
                                </div>
                                <div className="col-sm-6">
                                    <Form.Control type="date" placeholder="Date*"/>
                                </div>
                                <div className="col-sm-6">
                                    <Form.Control type="time" placeholder="Time*"/>
                                </div>
                            </div>
                            <Form.Control placeholder="Type Appointment Note*" as="textarea" rows="5"/>
                            <div className="appointment-btn">
                                <Button>Make An Appointment</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-12 col-lg-6 appointment-bg">
                    <img src="/figure7.png" alt="Appointment Background"/>
                </div>
            </div>
        </div>
    </div>
}
