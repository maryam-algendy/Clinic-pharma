import React, {useEffect, useState} from "react";
import {Button, Image, Modal, Form, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

//style
import "./style/MedicalHistory.scss";
import PageHeader from "./component/PageHeader";
import API from "../utilize/API";

// todo: Validate that date format matches MM-DD-YYYY
export default function MedicalHistory() {
    const [show, setShow] = useState(false);
    const [params, setParams] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [doctors, setDoctors] = useState();
    const [history, setHistory] = useState({});

    const [form, setForm] = useState({
        diagnosis: {},
        notes: "",
        doctor: "",
        lab: "",
        result: null,
        medicine: "",
        date: "",
        cured: false,
        injured: "",
        disease: ""

    });

    useEffect(() => {
        fetchHistory();
        API("doctors", "GET")
        .then(({data, status}) => {
            if (status === 200) {
                setDoctors(data?.doctors);
                setLoading(false);
            } else {
                setLoading(false);
            }
        })
    }, [])

    function addToHistory(path) {
        API(`history/${path}`, "POST", form)
            .then(({data, status}) => {
                if (status === 200) {
                    setError("Added successfully");
                    fetchHistory();
                } else {
                    setError(data?.message);
                }
            })
    }

    function removeItemFromHistory(path, query ,id) {
        API(`history/${path}/?${query}=${id}`, "Delete")
            .then(({data, status}) => {
                if (status === 200) {
                    fetchHistory();
                    setError("");
                } else {
                    console.log(data.message);
                }
            })

    }

    function fetchHistory() {
        API(`history/?patient=6078afb1fb33703fe4a1414a`)
            .then(({data, status}) => {
                if (status === 200) {
                    setHistory(data?.history);
                    setLoading(false);
                    setError("");
                    setShow(false);
                } else {
                    setLoading(false);
                }
            });
    }

    function modal(path) {
        return (
            <Modal show={show} onHide={() => setShow(false)}>
                {
                    (path === "diagnosis") ?
                        <Modal.Body className="text-center">
                            <div className="header text-center pb-4">
                                <h4 className="mb-0">Add diagnosis</h4>
                            </div>
                            <Form className="px-3">
                                <Form.Group className="text-left" controlId="input1">
                                    <Form.Label>Diagnosis:</Form.Label>
                                    <Form.Control type="text" placeholder={`Enter diagnosis name`}
                                                  onChange={(e) => setForm({...form, diagnosis: e.target.value})}
                                    />
                                </Form.Group>

                                <Form.Group className="text-left" controlId="input2">
                                    <Form.Label>Note</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder="I think..."
                                                  onChange={(e) => setForm({...form, notes: e.target.value})}/>
                                </Form.Group>

                                <Form.Group className="text-left" controlId="exampleForm.SelectCustom">
                                    <Form.Label>select the doctor</Form.Label>
                                    <Form.Control as="select" custom
                                                  onChange={(e) => setForm({...form, doctor: e.target.value})}>
                                        {
                                            doctors?.map(doctor => {
                                                return (
                                                    <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                                                )
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>

                                <Button onClick={() => setShow(false)}>Cancel</Button>
                                <Button onClick={() => addToHistory("diagnosis")}>
                                    Add
                                </Button>
                            </Form>
                        </Modal.Body>
                        : (path === "laboratory tests") ?
                        <Modal.Body className="text-center">
                            <div className="header text-center pb-4">
                                <h4 className="mb-0">Add New Test Details</h4>
                            </div>

                            <Form className="px-3">
                                <Form.Group className="text-left" controlId="input1">
                                    <Form.Label>Test Name:</Form.Label>
                                    <Form.Control type="text" placeholder={`Enter Test name`}
                                                  onChange={(e) => setForm({...form, lab: e.target.value})}
                                    />
                                </Form.Group>

                                <Form.Group className="text-left result-uploader" controlId="result-uploader">
                                    <label className="upload" htmlFor="result">
                                        <span>{form.image ? form.image.name : "No file uploaded"}</span>
                                        <i className="fa fa-upload"> </i>
                                    </label>
                                    <input type="file" name="result" id="result" onChange={(e) => setForm({ ...form, result: e.target.files[0] })}/>
                                </Form.Group>
                                <Button onClick={() => setShow(false)}>Cancel</Button>
                                <Button onClick={() => {
                                    addToHistory('lab')
                                }}>
                                    Add
                                </Button>
                            </Form>
                        </Modal.Body>
                        : (path === "medicines") ?
                            <Modal.Body className="text-center">
                                <div className="header text-center pb-4">
                                    <h4 className="mb-0">Add medicines</h4>
                                </div>

                                <Form className="px-3">
                                    <Form.Group className="text-left" controlId="input1">
                                        <Form.Label>medicine Name:</Form.Label>
                                        <Form.Control type="text" placeholder={`Enter medicine} name`}
                                                      onChange={(e) => setForm({...form, medicine: e.target.value})}
                                        />
                                    </Form.Group>

                                    <Form.Group className="text-left" controlId="input2">
                                        <Form.Label>Taking it since </Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="ex: 01/25/1970"
                                                      onChange={(e) => setForm({...form, date: e.target.value})}/>
                                    </Form.Group>

                                    <Button onClick={() => setShow(false)}>Cancel</Button>
                                    <Button onClick={() => {
                                        addToHistory("medicines")
                                    }}>
                                        Add
                                    </Button>
                                </Form>
                            </Modal.Body>

                            : (path === "continuous_medications") ?
                                <Modal.Body className="text-center">
                                    <div className="header text-center pb-4">
                                        <h4 className="mb-0">continuous medications</h4>
                                    </div>

                                    <Form className="px-3">
                                        <Form.Group className="text-left" controlId="input1">
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control type="text" placeholder={`Enter medicine name`}
                                                          onChange={(e) => setForm({...form, medicine: e.target.value})}
                                            />
                                        </Form.Group>

                                        <Form.Group className="text-left" controlId="input2">
                                            <Form.Label>Dose:</Form.Label>
                                            <Form.Control type="text" placeholder="ex: twice a day" onChange={(e) => setForm({...form, dose: e.target.value})}/>
                                        </Form.Group>

                                        <Button onClick={() => setShow(false)}>Cancel</Button>
                                        <Button onClick={() => {
                                            addToHistory("continuous_medications")
                                        }}>
                                            Add
                                        </Button>
                                    </Form>
                                </Modal.Body>

                                : (path === "surgeries") ?
                                    <Modal.Body className="text-center">
                                        <div className="header text-center pb-4">
                                            <h4 className="mb-0">Add Surgery</h4>
                                        </div>

                                        <Form className="px-3">
                                            <Form.Group className="text-left" controlId="input1">
                                                <Form.Label>Name:</Form.Label>
                                                <Form.Control type="text" placeholder={`Enter surgery name`} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                />
                                            </Form.Group>

                                            <Form.Group className="text-left" controlId="input2">
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control type="text" placeholder="MM-DD-YYYY" onChange={(e) => setForm({ ...form, date: e.target.value })}/>
                                            </Form.Group>

                                            <Button onClick={() => setShow(false)}>Cancel</Button>
                                            <Button onClick={() => addToHistory("surgeries")}>Add</Button>
                                        </Form>
                                    </Modal.Body>
                                    :
                                    (path === "chronic diseases") ?
                                        <Modal.Body className="text-center">
                                            <div className="header text-center pb-4">
                                                <h4 className="mb-0">Add Chronic disease</h4>
                                            </div>

                                            <Form className="px-3">
                                                <Form.Group className="text-left" controlId="input1">
                                                    <Form.Label> Name:</Form.Label>
                                                    <Form.Control type="text" placeholder={`Enter disease name`}
                                                                  onChange={(e) => setForm({
                                                                      ...form,
                                                                      diagnosis: e.target.value
                                                                  })}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="text-left" controlId="input2">
                                                    <Form.Label>have it since </Form.Label>
                                                    <Form.Control type="text"
                                                                  placeholder="ex: 01/25/1970"
                                                                  onChange={(e) => setForm({
                                                                      ...form,
                                                                      date: e.target.value
                                                                  })}/>
                                                </Form.Group>

                                                <Form.Group className="text-left" controlId="exampleForm">
                                                    <Form.Label>condition</Form.Label>
                                                    <Form.Control as="select" custom
                                                                  onChange={(e) => setForm({
                                                                      ...form,
                                                                      cured: e.target.value
                                                                  })}>
                                                        <option value={true}>cured</option>
                                                        <option value={false}>still not cured</option>


                                                    </Form.Control>
                                                </Form.Group>

                                                <Button onClick={() => setShow(false)}>Cancel</Button>
                                                <Button onClick={() => {
                                                    addToHistory("chronic_disease")
                                                }}>
                                                    Add
                                                </Button>
                                            </Form>
                                        </Modal.Body>
                                        :
                                        (path === "genetic diseases") ?
                                            <Modal.Body className="text-center">
                                                <div className="header text-center pb-4">
                                                    <h4 className="mb-0">Add genetic diseases</h4>
                                                </div>

                                                <Form className="px-3">
                                                    <Form.Group className="text-left" controlId="input1">
                                                        <Form.Label> Name:</Form.Label>
                                                        <Form.Control type="text" placeholder={`Enter disease name`} onChange={(e) => setForm({ ...form, disease: e.target.value })}/>
                                                    </Form.Group>

                                                    <Form.Group className="text-left" controlId="input2">
                                                        <Form.Label>injured </Form.Label>
                                                        <Form.Control type="text" onChange={(e) => setForm({ ...form, injured: e.target.value })}/>
                                                    </Form.Group>

                                                    <Form.Group className="text-left" controlId="exampleForm">
                                                        <Form.Label>condition</Form.Label>
                                                        <Form.Control as="select" custom defaultValue={true} onChange={(e) => setForm({ ...form, cured: e.target.value })}>
                                                            <option value={true}>cured</option>
                                                            <option value={false}>still not cured</option>


                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Button onClick={() => setShow(false)}>Cancel</Button>
                                                    <Button onClick={() => {
                                                        addToHistory("genetic_disease")
                                                    }}>
                                                        Add
                                                    </Button>
                                                </Form>
                                            </Modal.Body>
                                            :
                                            <Image src={path}/>
                }
                {error ? <div className={error.includes("Added successfully") ? "alert-success m-4" : "alert-danger m-4" }>{error}</div> : null}
            </Modal>
        )
    }

    return (
        <div id="medical-history">
            <PageHeader title="Medical History" firstLocation="Medical History"/>
            {!loading ?
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-3 lhs">
                            <div className="name-card">
                                <Image src={history?.patient?.image} />
                                <h4>{history?.patient?.name}</h4>
                                {history?.currentState && <span>{history?.currentState}</span>}
                            </div>
                            <div className="personal-info">
                                <h4>personal info</h4>
                                <p>
                                    phone:
                                    <span className="text-md-left">
                                        <a href="tel:0020123456789">+(20) {history?.patient?.phone}</a>
                                    </span>
                                </p>
                                <p>
                                    e-mail:
                                    <span>
                                        <a href={history?.patient?.email}>{history?.patient?.email}</a>
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
                                            blood type: <span>{history?.blood_type}</span>
                                        </div>
                                        <div
                                            className={(history?.patient?.gender === "female") ? "col-md-6 mb-2" : "d-none"}>
                                            pregnancy:
                                            <span>
                                                    <i className={(history?.pregnancy) ? "fas fa-check" : "d-none"}> </i>
                                                    <i className={(history?.pregnancy) ? "d-none" : "fas fa-times"}> </i>
                                                </span>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            height: <span>{history?.height} cm</span>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            weight: <span>{history?.weight} kg</span>
                                        </div>
                                    </div>
                                </div>

                                <h4>
                                    medicines:
                                    <Button onClick={() => {
                                        setShow(true);
                                        setParams(["medicines"]);
                                    }
                                    }>+</Button>
                                </h4>

                                {modal(params[0])}

                                <Table>
                                    <thead>
                                    <tr>
                                        <th>medicine</th>
                                        <th>details</th>
                                        <th> </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        (history?.medicines?.length > 0) ?
                                            history.medicines.map(item => {
                                                return (
                                                    <tr key={item?.id}>
                                                        <td>{item?.medicine}</td>
                                                        <td>{item?.date?.slice(0, 10)}</td>
                                                        <td className="remove">
                                                            {/* todo: Remove medicines from history using PATCH as an history update */}
                                                            <Button onClick={() => {}}>Remove</Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            <tr>
                                                <td className="no-data" colSpan="3">There are no medicines yet</td>
                                            </tr>
                                    }
                                    </tbody>
                                </Table>

                                <h4>
                                    Diagnosis:
                                    <Button onClick={() => {
                                        setShow(true);
                                        setParams(["diagnosis"]);
                                    }}>+</Button>
                                </h4>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Diagnosis</th>
                                        <th>Note</th>
                                        <th>Doctor</th>
                                        <th> </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        (history?.diagnosis?.length > 0) ?
                                            history?.diagnosis?.map(item => {
                                                return (
                                                    <tr key={item?.id}>
                                                        <td>{item?.diagnosis}</td>
                                                        <td className="date">{item?.notes}</td>
                                                        {item?.doctor ? <td>{item?.doctor?.name}</td> : <td>-</td>}
                                                        <td className="remove">
                                                            <Button onClick={() => removeItemFromHistory("diagnosis", "diagnosis", item?._id)}>remove</Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            <tr>
                                                <td className="no-data" colSpan="3">There are no diagnosis added yet.</td>
                                            </tr>}
                                    </tbody>
                                </Table>

                                <h4>
                                    Chronic diseases:
                                    <Button onClick={() => {
                                        setShow(true);
                                        setParams(["chronic diseases"]);
                                    }
                                    }>+</Button>
                                </h4>

                                {history?.chronic_diseases?.length > 0 ?
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>since</th>
                                        <th> </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        history?.chronic_diseases?.map(item => {
                                            return (
                                                <tr key={item?._id}>
                                                    <td>{item?.diagnosis}</td>
                                                    <td>{item?.date?.substr(0, item?.date?.indexOf("T"))}</td>
                                                    <td className="remove" onClick={() => removeItemFromHistory("chronic_disease", "disease", item?._id)}><Button>remove</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </Table> :
                                <div className="no-data">There are no chronic diseases added yet.</div>
                                }

                                <h4>
                                    genetic diseases:
                                    <Button onClick={() => {
                                        setShow(true);
                                        setParams(["genetic diseases"]);
                                    }}>+</Button>
                                </h4>

                                {history?.genetic_disease?.length > 0 ?
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>disease</th>
                                        <th>injured</th>
                                        <th>Cured</th>
                                        <th> </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        history?.genetic_disease?.map(item => {
                                            return (
                                                <tr key={item?._id}>
                                                    <td>{item?.disease}</td>
                                                    <td>{item?.injured}</td>
                                                    <td>{item?.cured === true ? "✔" : "❌"}</td>
                                                    <td className="remove" onClick={() => removeItemFromHistory("genetic_disease", "disease", item?._id)}><Button>remove</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </Table> :
                                <div className="no-data">There are no genetic diseases added yet.</div>
                                }

                                <h4>
                                    surgeries:
                                    <Button onClick={() => {
                                        setShow(true);
                                        setParams(["surgeries"]);
                                    }}>+</Button>
                                </h4>
                                {history?.surgeries?.length > 0 ?
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>name</th>
                                            <th>date</th>
                                            <th> </th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            history?.surgeries?.map(item => {
                                                return (
                                                    <tr key={item?._id}>
                                                        <td>{item?.name}</td>
                                                        <td>{item?.date}</td>
                                                        <td className="remove" onClick={() => removeItemFromHistory("surgeries", "surgery", item?._id)}><Button>remove</Button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </Table> :
                                    <div className="no-data">There are no surgeries added yet.</div>
                                }

                                <h4>
                                    continuous medications:
                                    <Button onClick={() => {
                                        setShow(true);
                                        setParams(["continuous_medications"]);
                                    }
                                    }>+</Button>
                                </h4>

                                {history?.continuous_medications?.length > 0 ?
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>medicine name</th>
                                            <th>since</th>
                                            <th> </th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            history?.continuous_medications?.map(item => {
                                                return (
                                                    <tr key={item?.id}>
                                                        <td>{item?.medicine} </td>
                                                        <td>{item?.dose} </td>
                                                        <td className="remove" onClick={() => removeItemFromHistory("continuous_medications", "medicine", item?._id)}><Button>remove</Button></td>
                                                    </tr>
                                                )
                                            })

                                        }
                                        </tbody>
                                    </Table> :
                                    <div className="no-data">There are no continuous medications added yet.</div>
                                }
                                <h4>
                                    laboratory tests:
                                    <Button onClick={() => {
                                        setShow(true);
                                        setParams(["laboratory tests"]);
                                    }
                                    }>+</Button>
                                </h4>

                                {history?.laboratory_tests?.length > 0 ?
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>date</th>
                                            <th>name</th>
                                            <th>test</th>
                                            <th> </th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            history?.laboratory_tests?.map(item => {
                                                return (
                                                    <tr key={item?.id}>
                                                        <td>{item?.lab}</td>
                                                        <td>{item?.name}</td>
                                                        <td>
                                                            <Button className="photo" onClick={() => {
                                                                setShow(true);
                                                                setParams([item?.result]);
                                                            }}>
                                                                <Image src={item?.result}/>
                                                            </Button>
                                                        </td>
                                                        <td className="remove" onClick={() => removeItemFromHistory("lab", "lab", item?._id)}><Button>remove</Button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </Table> :
                                    <div className="no-data">There are no Laboratory tests added yet.</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div id="loading">
                    <div className="spinner-border text-primary m-auto" role="status">
                        <span className="visually-hidden sr-only">Loading...</span>
                    </div>
                </div>
            }

        </div>
    )
}
