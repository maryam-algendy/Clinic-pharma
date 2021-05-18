import React, { useEffect, useState } from 'react';
import { Table, Modal, Button, Form, Nav } from 'react-bootstrap';

// style
import './style/Appointment.scss';
import API from "../../utilize/API";
import storage from "../../utilize/storage";
import dateConverter from "../../utilize/dateConverter";
import { Link } from "react-router-dom";

export default function Appointment()
{
    const [appointments, setAppointments] = useState([]);
    const [form, setForm] = useState({ time: "", date: "" });
    const [show, setShow] = useState(false);
    const [error, setError] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addAppointment() {
        API("appointment", "POST", form)
            .then(({ data, status }) => {
                if (status === 200) {
                    setError("Added Successfully");
                    setTimeout(() => {
                        setShow(false);
                    }, 1500)
                } else {
                    // todo: display error in modal
                    setError(data?.message);
                }
            })
    }

    useEffect(() => {
        API("appointment")
            .then(({ data, status }) => {
                if (status === 200) {
                    setAppointments(data?.appointments);
                } else {
                    console.log(data);
                }
        })
    }, [])

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
                        <th>ID</th>
                        <th>{storage("role") === "patient" ? "Doctor" : "Patient"}</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>{storage("role") === "patient" ? "Department" : "Medical History"}</th>
                        <th>DM</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments?.map((appointment, i) => <tr key={i}>
                        <td>#{i + 1}</td>
                        <td>{storage("role") === "patient" ? <Nav.Link href={`/doctor/${appointment?.doctor?.name}`}>{appointment?.doctor?.name}</Nav.Link> : !appointment.reserved ? "Not Reserved" : appointment?.patient?.name}</td>
                        <td>{dateConverter(appointment?.date)}</td>
                        <td>{appointment?.time}</td>
                        <td>{storage("role") === "patient" ? appointment?.doctor?.specialization : !appointment.reserved ? "-" : <Nav.Link href={`/history/${appointment?.patient?._id}`}><i className='fa fa-notes-medical'> </i></Nav.Link>}</td>
                        <td>
                            {!appointment.reserved ? "-" : <Nav.Link href="/chat">
                                <i className="fa fa-paper-plane message-icon"> </i>
                            </Nav.Link>}
                        </td>
                    </tr>)}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
