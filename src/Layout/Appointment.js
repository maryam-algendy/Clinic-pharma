import React, {useState} from "react";
import Select from 'react-select';
import swal from "sweetalert";

// style
import "./style/Appointment.scss";

// component
import PageHeader from "./component/PageHeader";
import {Button, Form} from "react-bootstrap";

export default function Appointment()
{
    const chooseDepartment = [
        {value: "Select Department*"},
        {value: "Dental"},
        {value: "Gynaecology"},
        {value: "Eye"},
        {value: "Cardiology"},
        {value: "Orthopaedics"},
        {value: "Gastroenterology"},
        {value: "Neurology"},
        {value: "Medicine"}
    ];

    const chooseDoctor = [
        {value: "Choose Doctor by Name*"},
        {value: "Dr. Zinia Zara"},
        {value: "Dr. Nadim Kamal"},
        {value: "Dr. Rihana Roy"},
        {value: "Dr. Jason Roy"},
        {value: "Dr. Steven Jobs"},
        {value: "Dr. Johora Roy"}
    ];

    const [department, setDepartment] = useState(chooseDepartment[0]);
    const [doctor, setDoctor] = useState(chooseDoctor[0]);

    const onchangeDepartment = (items) => setDepartment(items);
    const onchangeDoctor = (items) => setDoctor(items);

    return <div id="appointment">
        <PageHeader title="Appointment Form" firstLocation="Form" />
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 form">
                    <div className="content">
                        <h3 className="title">Make An Appointment</h3>
                        <div className="line"> </div>
                        <p className="description">Efficiently myocardinate market-driven innovation via open-source alignment. Dramatically engage porescently.</p>
                        <Form>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Select
                                        className="select"
                                        value={department}
                                        onChange={onchangeDepartment}
                                        options={chooseDepartment}
                                        getOptionLabel={(chooseDepartment) => chooseDepartment.value}
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <Select
                                        className="select"
                                        value={doctor}
                                        onChange={onchangeDoctor}
                                        options={chooseDoctor}
                                        getOptionLabel={(chooseDoctor) => chooseDoctor.value}
                                    />
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
                                {/* todo: handle request appointment */}
                                <Button onClick={() => setTimeout(() => { swal({ icon: "success", text: "Appointment requested successfully", button: false }) }, 1000)}>Make An Appointment</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <img src="/figure2.png" alt="Appointment Background"/>
                </div>
            </div>
        </div>
    </div>
}
