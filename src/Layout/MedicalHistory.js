import React, { useState } from "react";
import { Button, Image, Modal, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

//style
import "./style/MedicalHistory.scss";
import PageHeader from "./component/PageHeader";

export default function MedicalHistory () {
    const [show, setShow] = useState(false);
    const [params, setParams] = useState({});

    function modal (param1, param2, path) {
        return (
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body className="text-center">
                    <div className="header text-center pb-4">
                        <h4 className="mb-0">Add {param1}</h4>
                    </div>

                    <Form className="px-3">
                        <Form.Group className="text-left" controlId="input1">
                            <Form.Label>{param1} Name:</Form.Label>
                            <Form.Control type="text" placeholder={`Enter ${param1} name`}/>
                        </Form.Group>

                        <Form.Group className="text-left" controlId="input2">
                            <Form.Label>{params[1]?.toLowerCase() === "date" && params[2] === "medicines" ? "Taking it since" : param2}:</Form.Label>
                            <Form.Control type="text" placeholder={params[1]?.toLowerCase() === "date" || params[1]?.toLowerCase() === "since" ? "ex: 01/25/1970" : "ex: Twice a day"} />
                        </Form.Group>
                        <Button onClick={() => setShow(false)}>Cancel</Button>
                        <Button onClick={() => {}}>
                            Add
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }

    return (
        <div id="medical-history">
            <PageHeader title="Medical History" firstLocation="Medical History"/>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 lhs">
                        <div className="name-card">
                            <Image src="/figure1.png"/>
                            <h4>patient</h4>
                            <span>current state</span>
                        </div>
                        <div className="personal-info">
                            <h4>personal info</h4>
                            <p>
                                phone:
                                <span className="text-md-left">
                                    <a href="tel:0020123456789">+(20) 123 4567</a>
                                </span>
                            </p>
                            <p>
                                e-mail:
                                <span>
                                    <a href="mailto:test@clinic.pharma">test@clinic.pharma</a>
                                </span>
                            </p>
                            <p className="social-box">
                                social:
                                <span>
                                    <Link to="/">
                                        <i className="fab fa-facebook-f"> </i>
                                    </Link>

                                    <Link to="/">
                                        <i className="fab fa-twitter"> </i>
                                    </Link>

                                    <Link to="/">
                                        <i className="fab fa-linkedin-in"> </i>
                                    </Link>

                                    <Link to="/">
                                        <i className="fab fa-skype"> </i>
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-9 rhs">
                        <div className="details">
                            <div className="about-me">
                                <h4>General Info:</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        blood type: <span>-O</span>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        pregnancy:
                                        <span>
                                                <i className="fas fa-check"> </i>
                                                <i className="fas fa-times d-none"> </i>
                                            </span>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        height: <span>150 cm</span>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        weight: <span>60 kg</span>
                                    </div>
                                </div>
                            </div>

                            <h4>
                                medicines:
                                <Button onClick={() => {
                                    setShow(true);
                                    setParams(["Medicine", "Date", "medicines"]);
                                }
                                }>+</Button>
                            </h4>

                            {modal(params[0], params[1], params[2])}

                            <Table>
                                <thead>
                                <tr>
                                    <th>medicine</th>
                                    <th>details</th>
                                    <th> </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>panadol</td>
                                    <td>twice a day</td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                <tr>
                                    <td>flector 50</td>
                                    <td>once a day</td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                </tbody>
                            </Table>

                            <h4>
                                diagnosis:
                                <Button onClick={() => {
                                    setShow(true);
                                    setParams(["Diagnose", "Since", "diagnosis"]);
                                }
                                }>+</Button>
                            </h4>
                            <Table>
                                <thead>
                                <tr>
                                    <th>date</th>
                                    <th>diagnose</th>
                                    <th> </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td className="date">13/10/2010</td>
                                    <td>catch cold</td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                <tr>
                                    <td className="date">3/06/2014</td>
                                    <td>stomach flu</td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                </tbody>
                            </Table>

                            <h4>
                                chronic diseases:
                                <Button onClick={() => {
                                    setShow(true);
                                    setParams(["Chronic disease", "Since", "chronic diseases"]);
                                }
                                }>+</Button>
                            </h4>

                            <Table>
                                <thead>
                                <tr>
                                    <th>since</th>
                                    <th>name</th>
                                    <th> </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>born</td>
                                    <td>diabetes</td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                </tbody>
                            </Table>

                            <h4>
                                surgeries:
                                <Button onClick={() => {
                                    setShow(true);
                                    setParams(["Surgery", "Date", "surgeries"]);
                                }
                                }>+</Button>
                            </h4>

                            <Table>
                                <thead>
                                <tr>
                                    <th>date</th>
                                    <th>name</th>
                                    <th> </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>2012</td>
                                    <td>open heart surgery</td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                </tbody>
                            </Table>

                            <h4>
                                continuous indications:
                                <Button onClick={() => {
                                    setShow(true);
                                    setParams(["Indication", "time", "continuous indications"]);
                                }
                                }>+</Button>
                            </h4>

                            <Table>
                                <thead>
                                <tr>
                                    <th>day</th>
                                    <th>time</th>
                                    <th> </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td> </td>
                                    <td> </td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                </tbody>
                            </Table>

                            {/* todo: receive lab-result as image */}
                            <h4>
                                laboratory tests:
                                <Button onClick={() => {
                                    setShow(true);
                                    setParams(["Lab", "Date", "laboratory tests"]);
                                }
                                }>+</Button>
                            </h4>

                            <Table>
                                <thead>
                                <tr>
                                    <th>date</th>
                                    <th>name</th>
                                    <th> </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>12/3/2021</td>
                                    <td>CBC</td>
                                    <td className="remove"><Button>remove</Button></td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}