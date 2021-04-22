import React from 'react';
import {Button, Form} from "react-bootstrap";

// style
import './style/Profile.scss';

export default function Profile()
{
    return(
        <div id="profile">
            <div className="profile-form">
                <Form>
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Control placeholder="Full Name *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control placeholder="User Name *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="email" placeholder="E-mail *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="password" placeholder="Password *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="number" placeholder="Phone *"/>
                        </div>
                        <Form.Group className="col-sm-6" controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom>
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="col-sm-12">
                            <Form.Control type="date" placeholder="Date of birth *"/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="upload">Image *</label>
                            <Form.Control id="upload" type="file"/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="upload">Certificate *</label>
                            <Form.Control id="upload" type="file"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Pharmacy Location *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Working Date *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Government *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Country *"/>
                        </div>
                    </div>
                    <Form.Control placeholder="About *" as="textarea" rows="6"/>
                    <Button>Save</Button>
                </Form>
            </div>
        </div>
    );
}