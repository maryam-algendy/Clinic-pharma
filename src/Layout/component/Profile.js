import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import swal from "sweetalert";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";

// style
import './style/Profile.scss';

// utilize
import API from "../../utilize/API";
import storage from "../../utilize/storage";
import difference from "../../utilize/difference";

export default function Profile()
{
    // todo: display/hide fields depends on user-role
    const [data, setData] = useState({});
    const [form, setForm] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        if (typeof storage("user") !== "undefined") {
            setData(storage("user"));
            setForm(storage("user"));
        }
    }, []);

    function onUpdateProfile()
    {
        // change button status to loading
        document.getElementById("update-profile").innerHTML = `<div class="spinner-border text-primary m-auto" role="status"></div>`

        // remove tokens and roles from object
        delete data.tokens;
        delete data.roles;
        delete form.tokens;
        delete form.roles;

        // get differences between old and new user-data
        let body = difference(data, form);

        // validate there is at least change
        if (body && Object.keys(body).length === 0 && body.constructor === Object) {
            document.getElementById("update-profile").innerHTML = 'Save'
            return swal({icon: "info", text: "There is no change to save", button: false });
        }

        API("auth/user", "PATCH", body)
            .then(({ data, status }) => {
                if (status === 200) {
                    storage("user", data?.user);
                    document.getElementById("update-profile").innerHTML = 'Saved';
                    swal({ icon: 'success', text: "Updated Successfully", button: false });
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500)
                } else {
                    setError(data?.message);
                    document.getElementById("update-profile").innerHTML = 'Save'
                }
            })
    }

    return(
        <div id="profile">
            <div className="profile-form">
                <Form>
                    {error ? <div className="alert-danger">{error}</div> : null}
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Control placeholder="Full Name *" value={form?.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control placeholder="User Name *" value={form?.username} onChange={(e) => setForm({...form, username: e.target.value})}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="email" placeholder="E-mail *" value={form?.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="password" placeholder="Password *" value={form?.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                        </div>
                        <div className="col-sm-6">
                            <Form.Control type="number" placeholder="Phone *" value={form?.phone} onChange={(e) => setForm({...form, phone: e.target.value})}/>
                        </div>
                        <Form.Group className="col-sm-6" controlId="gender">
                            <Form.Control value={form.gender} as="select" custom>
                                <option value="gender">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="col-sm-12">
                            {/* // todo: receive date of birth divided (ex: mm dd yyyy */}
                            <Form.Control type="date" placeholder="Date of birth *" onChange={(e) => {}}/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="upload-image">
                                Image
                                <i className="fa fa-upload"> </i>
                            </label>
                            <Form.Control id="upload-image" type="file" onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="upload-certificate">
                                Certificate
                                <i className="fa fa-upload"> </i>
                            </label>
                            <Form.Control id="upload-certificate" type="file" onChange={(e) => setForm({ ...form, certificate: e.target.files[0] })} />
                        </div>
                        <>
                            <div className="col-sm-6">
                                <Form.Control type="text" placeholder="Pharmacy Location *" value={form?.pharmacyLocation} onChange={(e) => setForm({...form, pharmacyLocation: e.target.value})}/>
                            </div>
                            <div className="col-sm-6">
                                <Form.Control type="text" placeholder="Working Date *"  value={form?.workingDate} onChange={(e) => setForm({...form, workingDate: e.target.value})} />
                            </div>
                        </>
                        <div className="col-sm-6">
                            <RegionDropdown country={form?.country} value={form?.government} onChange={(gov) => setForm({...form, government: gov})}/>
                        </div>
                        <div className="col-sm-6">
                            <CountryDropdown blacklist={['IL']} value={form?.country} onChange={(country) => setForm({...form, country: country, government: ""})}/>
                        </div>
                    </div>
                    <Form.Control placeholder="About *" as="textarea" rows="6" value={form.value} onChange={(e) => setForm({ ...form, about: e.target.value })}/>
                    <Button id="update-profile" onClick={() => onUpdateProfile()}>Save</Button>
                </Form>
            </div>
        </div>
    );
}
