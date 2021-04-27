import React, {useState} from 'react';
import {Table, Modal, Button, Form} from 'react-bootstrap';

// style
import './style/Appointment.scss';
import API from "../../utilize/API";

export default function Appointment()
{
    const [form, setForm] = useState({ time: "", date: "" });
    const [show, setShow] = useState(false);
    const [error, setError] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addAppointment() {
        API("appointment", "POST", form)
            .then(({ data, status }) => {
                if (status === 200) {
                    console.log(data);
                    setError("Added Successfully");
                    setTimeout(() => {
                        setShow(false);
                    }, 1500)
                } else {
                    console.log(data);
                }
            })
    }

    return(
        <div id="appointment">
            <div className="add-appointment">
                <div className="appointment-btn">
                    <button  onClick={handleShow}><i className="fas fa-plus"> </i>Add Appointment</button>
                </div>
                <div className="modal">
                    {error ? <div className={error === "Added Successfully" ? "alert-primary" : "alert-danger"}>{error}</div> : null}
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title className="title">Add Appointment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} placeholder="Add Time *" />
                            <Form.Control value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="date-btn" placeholder="Add Date *" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => addAppointment()}>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className="table">
                <Table>
                    <thead>
                    <tr>
                        <th>Appointment</th>
                        <th>Doctor</th>
                        <th>Date/Time</th>
                        <th>Department</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Zinia Zara</td>
                        <td>Jan. 7. 2021 - 05:00PM</td>
                        <td>Cardiology</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Rihana Roy</td>
                        <td>Feb. 18. 2021 - 06:00PM</td>
                        <td>Dental Consult</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nadim Kamal</td>
                        <td>Jun. 1. 2021 - 07:00PM</td>
                        <td>Lense Expert</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Steven Jobs</td>
                        <td>Aug. 11. 2021 - 08:00PM</td>
                        <td>Orthopaedics</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Jason Roy</td>
                        <td>Dec. 14. 2021 - 09:00PM</td>
                        <td>Gynaecology</td>
                        <td>Online</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}