import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import API from "../utilize/API";
import storage from "../utilize/storage";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
//
import "./style/GitAuthenticate.scss";

export default function GitAuthenticate() {
    const [form, setForm] = useState({ name: "", username: "", email: "", password: "", government: "", counter: "", phone: "", specialization: "", location: "" });
    const [error, setError] = useState();

    function handleLogin() {
        API("patient/auth/login", "POST", form)
            .then(({ data, status }) => {
                if (status === 200) {
                    storage("access-token", data?.patient?.token);
                    setTimeout(() => {
                        window.location.replace("/");
                    }, 1000);
                } else {
                    setError(data?.message);
                }
            })
    }

    function handleDoctorSignup() {
        API("doctor/auth/signup", "POST", form)
            .then(({ data, status }) => {
                if (status === 200) {
                    storage("access-token", data?.doctor?.token);
                    setTimeout(() => {
                        window.location.replace("/");
                    }, 1000);
                } else {
                    setError(data?.message);
                    window.scrollTo(0, 0);
                }
            })
    }

    useEffect(() => {
        if (storage("access-token")) {
            window.location.replace("/");
        }
    });

    console.log(form);

    return <div id="git-authenticate">
        <div id="page-content">
            <div className="container py-5 boxes">
                <div className="row">
                    {window.location.pathname.replace("/account/", "") === "login" ?
                        <div className="col-12">
                            <h1>Login</h1>
                            <p>If you have an account with us, please log in. If not, <Link to="/account/register">Register</Link> now.</p>

                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-8 mx-auto">
                                        {error ? <div className="alert-danger">{error}</div> : null}
                                        <form method="post">
                                            <label htmlFor="email">E-mail*</label>
                                            <input type="email" name="email" placeholder="Enter E-mail" id="email"
                                                   inputMode="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />

                                            <label htmlFor="password">Password*</label>
                                            <input type="password" name="password" placeholder="Enter Password"
                                                   id="password" inputMode="none" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                                            />
                                        </form>

                                        <div className="actions">
                                            <button onClick={() => handleLogin()}>Login</button>

                                            <Link to="" className="lost-pass-link">Lost your password?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : window.location.pathname.replace("/account/", "") === "register" ?
                        <div className="col-12">
                            <h1>Register</h1>
                            <p>Create New Account or Register as a <Link to="/account/doctor">Doctor</Link></p>

                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-8 mx-auto">
                                        <form method="post">
                                            <label htmlFor="first_name">First Name*</label>
                                            <input type="text" name="first_name" placeholder="Enter First Name"
                                                   id="first_name" inputMode="text"/>

                                            <label htmlFor="last_name">Last Name*</label>
                                            <input type="text" name="last_name" placeholder="Enter Last Name"
                                                   id="last_name" inputMode="text"/>

                                            <label htmlFor="email">Email*</label>
                                            <input type="email" name="email" placeholder="Enter Email" id="email"
                                                   inputMode="email"/>

                                            <label htmlFor="password">Password*</label>
                                            <input type="password" name="password" placeholder="Enter Password"
                                                   id="password" inputMode="none"/>
                                        </form>

                                        <div className="actions">
                                            <button>Create</button>

                                            <Link to="/account/login" className="lost-pass-link">Already have an
                                                account?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="col-12">
                            <h1>Create Doctor Account</h1>
                            <p>Create an account now and communicate with patients easily and remotely.</p>

                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-8 mx-auto">
                                        {error ? <div className="alert-danger">{error}</div> : null}
                                        <form method="post">
                                            <label htmlFor="first_name">Name*</label>
                                            <input type="text" name="first_name" placeholder="Enter Name"
                                                   id="first_name" inputMode="text" autoFocus value={form.name}
                                                   onChange={(e) => setForm({ ...form, name: e.target.value })} />

                                            <label htmlFor="email">Email*</label>
                                            <input type="email" name="email" placeholder="Enter Email"
                                                   id="email" inputMode="email" value={form.email}
                                                   onChange={(e) => setForm({ ...form, email: e.target.value })} />

                                            <label htmlFor="email">Username*</label>
                                            <input type="username" name="username" placeholder="Enter username"
                                                   id="username" inputMode="username" value={form.username}
                                                   onChange={(e) => setForm({ ...form, username: e.target.value })} />

                                            <label htmlFor="password">Password*</label>
                                            <input type="password" name="password" placeholder="Enter Password"
                                                   id="password" inputMode="none" value={form.password}
                                                   onChange={(e) => setForm({ ...form, password: e.target.value })} />

                                            <label htmlFor="phone">Phone*</label>
                                            <input type="text" name="phone"  placeholder="Enter phone"
                                                   id="phone" inputMode="tel" value={form.phone}
                                                   onChange={(e) => setForm({ ...form, phone: e.target.value })} />

                                            <label htmlFor="address">Address*</label>
                                            <input type="text" name="address"  placeholder="Enter address"
                                                   id="address" inputMode="address" value={form.location}
                                                   onChange={(e) => setForm({ ...form, location: e.target.value })} />

                                            <label htmlFor="gender">Gender</label>
                                            <select name="gender" id="gender" defaultValue="gender" onChange={(e) => setForm({ ...form, gender: e.target.value })} >
                                                <option value="gender" disabled>Select your gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>

                                            <label htmlFor="specialization">Specialization</label>
                                            <select name="specialization" id="specialization" defaultValue="specialization" onChange={(e) => setForm({ ...form, specialization: e.target.value })} >
                                                <option value="specialization" disabled>Select your specialization</option>
                                                <option value="Specialization #1">Specialization #1</option>
                                                <option value="Specialization #2">Specialization #2</option>
                                                <option value="Specialization #3">Specialization #3</option>
                                            </select>

                                            <label>Profile Image</label>
                                            <label className="upload" htmlFor="profile">
                                                <span>{form.image ? form.image.name : "No file uploaded"}</span>
                                                <i className="fa fa-upload"> </i>
                                            </label>
                                            <input type="file" name="profile" id="profile" onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />

                                            <label>Certificate</label>
                                            <label className="upload" htmlFor="certificate">
                                                <span>{form.certificate ? form.certificate.name : "No file uploaded"}</span>
                                                <i className="fa fa-upload"> </i>
                                            </label>
                                            <input type="file" name="certificate" id="certificate" onChange={(e) => setForm({ ...form, certificate: e.target.files[0] })} accept="image/x-png,image/gif,image/jpeg, image/jpg" />

                                            <label>Country</label>
                                            <CountryDropdown blacklist={['IL']} value={form.country} onChange={(country) => setForm({ ...form, country: country, government: "" })} />

                                            <label>Government</label>
                                            <RegionDropdown disableWhenEmpty={true} country={form.country} value={form.government} onChange={(gov) => setForm({ ...form, government: gov })} />
                                        </form>

                                        <span className="required">*Required data</span>

                                        <div className="actions">
                                            <button onClick={() => handleDoctorSignup()}>Create</button>

                                            <Link to="/account/login" className="lost-pass-link">Already have an
                                                account?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
}