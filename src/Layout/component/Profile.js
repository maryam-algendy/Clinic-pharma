import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import storage from "../../utilize/storage";

// style
import './style/Profile.scss';

export default function Profile()
{
    const [data, setData] = useState({});

    let loginData = {}
    useEffect(() => {
        loginData = localStorage.getItem("user");
        if (typeof storage("user") !== "undefined") {
            setData(storage("user"))
        }
    })

    const handleChange = (e) => {
        setData({...data, name: e.target.value});
    }

    return(
        <div id="profile">
            <div className="profile-form">
                <Form>
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Control placeholder="Full Name *" value={loginData.name} onChange={handleChange}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control placeholder="User Name *" value={loginData.username} onChange={handleChange}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="email" placeholder="E-mail *" value={loginData.email} onChange={handleChange}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="password" placeholder="Password *" value={loginData.password} onChange={handleChange}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="number" placeholder="Phone *" value={loginData.phone} onChange={handleChange}/>
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
                            <label htmlFor="upload-image">Image *</label>
                            <Form.Control id="upload-image" type="file"/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="upload-certificate">Certificate *</label>
                            <Form.Control id="upload-certificate" type="file"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Pharmacy Location *" value={loginData.location} onChange={handleChange}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Working Date *"/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Government *" value={loginData.government} onChange={handleChange}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Country *" value={loginData.country} onChange={handleChange}/>
                        </div>
                    </div>
                    <Form.Control placeholder="About *" as="textarea" rows="6"/>
                    <Button>Save</Button>
                </Form>
            </div>
        </div>
    );
}