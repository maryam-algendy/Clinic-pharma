import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import API from "../utilize/API";
import storage from "../utilize/storage";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";

//
import "./style/GitAuthenticate.scss";

export default function GitAuthenticate() {

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        government: "",
        country: "",
        specialization: "",
        location: "",
        pharmacyName: "",
        height:"",
        weight:"",
        blood_type:"",
        officeNumber: ""
    });

    const [error, setError] = useState();

    function handleLogin() {
        document.querySelector("#submit-form").innerHTML = `<div class="spinner-border text-primary m-auto" role="status"></div>`
        API("auth/login", "POST", form)
            .then(({data, status}) => {
                if (status === 200) {
                    storage("access-token", data?.user?.tokens[0]?.token);
                    storage("user", JSON.stringify(data.user));
                    storage("role", data?.role);
                    document.querySelector("#submit-form").innerHTML = `Login`
                    setTimeout(() => {
                        window.location.replace("/");
                    }, 500);
                } else {
                    setError(data?.message);
                    document.querySelector("#submit-form").innerHTML = `Login`
                    window.scrollTo(0, 0);
                }
            })
    }

    function handleDoctorSignup() {
        document.querySelector("#create-doctor").innerHTML = `<div class="spinner-border text-primary m-auto" role="status"></div>`
        API("doctor/auth/signup", "POST", form)
            .then(({data, status}) => {
                if (status === 200) {
                    setError("Account created successfully, you will be redirected in moments");
                    document.querySelector("#create-doctor").innerHTML = `Create`
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        window.location.replace("/account/login");
                    }, 1000);
                } else {
                    setError(data?.message);
                    document.querySelector("#create-doctor").innerHTML = `Create`
                    window.scrollTo(0, 0);
                }
            })
    }

    function handlePatientSignup() {
        document.querySelector("#create-patient").innerHTML = `<div class="spinner-border text-primary m-auto" role="status"></div>`
        API("patient/auth/signup", "POST", form)
            .then(({data, status}) => {
                if (status === 200) {
                    console.log(data)
                    setError("Account created successfully, you will be redirected in moments");
                    document.querySelector("#create-patient").innerHTML = `Login`;
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        window.location.replace("/account/login");
                    }, 1000);
                } else {
                    setError(data?.message);
                    document.querySelector("#create-patient").innerHTML = `Create`
                    window.scrollTo(0, 0);
                }
            })
    }

    function handlePharmacistSignup() {
        document.querySelector("#create-pharmacist").innerHTML = `<div class="spinner-border text-primary m-auto" role="status"></div>`
        API("pharmacist/auth/signup", "POST", form)
            .then(({data, status}) => {
                if (status === 200) {
                    document.querySelector("#create-pharmacist").innerHTML = `Create`;
                    setError("Account created successfully, you will be redirected in moments");
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        window.location.replace("/account/login");
                    }, 500);
                } else {
                    document.querySelector("#create-pharmacist").innerHTML = `Create`;
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
                                        {error ? <div className={error.includes("Account created successfully") ? "alert-success" : "alert-danger"}>{error}</div> : null}
                                        <form method="post" onKeyPress={(e) => e.key === "Enter" ? document.getElementById("submit-form").click() : null}>
                                            <label htmlFor="email">E-mail*</label>
                                            <input type="email" name="email" placeholder="Enter E-mail" id="email"
                                                   inputMode="email" value={form.email}
                                                   onChange={(e) => setForm({...form, email: e.target.value})}
                                            />

                                            <label htmlFor="password">Password*</label>
                                            <input type="password" name="password" placeholder="Enter Password"
                                                   id="password" value={form.password}
                                                   onChange={(e) => setForm({...form, password: e.target.value})}
                                            />
                                        </form>

                                        <div className="actions">
                                            <button id="submit-form" onClick={() => handleLogin()}>Login</button>

                                            <Link to="" className="lost-pass-link">Lost your password?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : window.location.pathname.replace("/account/", "") === "register" ?
                            <div className="col-12">
                                <h1>Register</h1>
                                <p>Create New Account or Register as a <Link to="/account/doctor">Doctor</Link> or
                                    a <Link to="/account/pharmacist">Pharmacist</Link></p>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-8 mx-auto">
                                            {error ? <div className={error.includes("Account created successfully") ? "alert-success" : "alert-danger"}>{error}</div> : null}
                                            <form method="post">
                                                <label htmlFor="full_name">Full Name*</label>
                                                <input type="text" name="full_name" placeholder="Enter Full Name"
                                                       id="full_name" inputMode="text" value={form.name}
                                                       onChange={(e) => setForm({...form, name: e.target.value})}/>

                                                <label htmlFor="username">User Name*</label>
                                                <input type="text" name="username" placeholder="Enter User Name"
                                                       id="username" inputMode="text" value={form.username}
                                                       onChange={(e) => setForm({...form, username: e.target.value})}/>


                                                <label htmlFor="email">Email*</label>
                                                <input type="email" name="email" placeholder="Enter Email" id="email"
                                                       inputMode="email" value={form.email}
                                                       onChange={(e) => setForm({...form, email: e.target.value})}/>


                                                <label htmlFor="password">Password*</label>
                                                <input type="password" name="password" placeholder="Enter Password"
                                                       id="password" value={form.password}
                                                       onChange={(e) => setForm({...form, password: e.target.value})}/>


                                                <label htmlFor="phone">Phone*</label>
                                                <input type="text" name="phone" placeholder="Enter phone"
                                                       id="phone" inputMode="tel" value={form.phone}
                                                       onChange={(e) => setForm({...form, phone: e.target.value})}/>

                                                <label>Gender</label>
                                                <select name="gender" id="gender" defaultValue="" onChange={(e) => setForm({...form, gender: e.target.value})}>
                                                    <option value="">-</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>

                                                <label>Blood Type </label>
                                                <select name="blood_type" id="blood_type" defaultValue="" onChange={(e) => setForm({...form, blood_type: e.target.value})}>
                                                    <option value="">-</option>
                                                    <option value="+A">A+</option>
                                                    <option value="-A">A-</option>
                                                    <option value="+B">B+</option>
                                                    <option value="-B">B-</option>
                                                    <option value="+0">O+</option>
                                                    <option value="-0">O-</option>
                                                    <option value="+AB">AB+</option>
                                                    <option value="-AB ">AB-</option>
                                                </select>

                                                <label htmlFor="height">height*</label>
                                                <input type="text" name="height" placeholder="Enter Height"
                                                       id="height"  value={form.height}
                                                       onChange={(e) => setForm({...form, height: e.target.value})}/>

                                                <label htmlFor="weight">weight*</label>
                                                <input type="text" name="weight" placeholder="Enter Weight"
                                                       id="weight"  value={form.weight}
                                                       onChange={(e) => setForm({...form, weight: e.target.value})}/>

                                                <label>Country</label>
                                                <CountryDropdown blacklist={['IL']} value={form.country}
                                                                 onChange={(country) => setForm({
                                                                     ...form,
                                                                     country: country,
                                                                     government: ""
                                                                 })}/>

                                                <label>Government</label>
                                                <RegionDropdown disableWhenEmpty={true} country={form.country}
                                                                value={form.government} onChange={(gov) => setForm({
                                                    ...form,
                                                    government: gov
                                                })}/>

                                                <label>Profile Image</label>
                                                <label className="upload" htmlFor="profile">
                                                    <span>{form.image ? form.image.name : "No file uploaded"}</span>
                                                    <i className="fa fa-upload"> </i>
                                                </label>
                                                <input type="file" name="profile" id="profile" onChange={(e) => setForm({ ...form, image: e.target.files[0] })}/>
                                            </form>

                                            <div className="actions">
                                                <button id="create-patient" onClick={() => handlePatientSignup()}>Create</button>

                                                <Link to="/account/login" className="lost-pass-link">Already have an
                                                    account?</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : window.location.pathname.replace("/account/", "") === "doctor" ?
                                <div className="col-12">
                                    <h1>Create Doctor Account</h1>
                                    <p>Create an account now and communicate with patients easily and remotely.</p>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-lg-8 mx-auto">
                                                {error ? <div className={error.includes("Account created successfully") ? "alert-success" : "alert-danger"}>{error}</div> : null}
                                                <form method="post">
                                                    <label htmlFor="first_name">Name*</label>
                                                    <input type="text" name="first_name" placeholder="Enter Name"
                                                           id="first_name" inputMode="text" autoFocus value={form.name}
                                                           onChange={(e) => setForm({...form, name: e.target.value})}/>

                                                    <label htmlFor="email">Email*</label>
                                                    <input type="email" name="email" placeholder="Enter Email"
                                                           id="email" inputMode="email" value={form.email}
                                                           onChange={(e) => setForm({...form, email: e.target.value})}/>

                                                    <label htmlFor="email">Username*</label>
                                                    <input type="username" name="username" placeholder="Enter username"
                                                           id="username" value={form.username}
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               username: e.target.value
                                                           })}/>

                                                    <label htmlFor="password">Password*</label>
                                                    <input type="password" name="password" placeholder="Enter Password"
                                                           id="password" value={form.password}
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               password: e.target.value
                                                           })}/>

                                                    <label htmlFor="phone">Phone*</label>
                                                    <input type="text" name="phone" placeholder="Enter phone"
                                                           id="phone" inputMode="tel" value={form.phone}
                                                           onChange={(e) => setForm({...form, phone: e.target.value})}/>

                                                    <label htmlFor="phone">Office Number*</label>
                                                    <input type="text" name="phone" placeholder="Enter phone"
                                                           id="phone" inputMode="tel" value={form.officeNumber}
                                                           onChange={(e) => setForm({...form, officeNumber: e.target.value})}/>


                                                    <label htmlFor="address">Address*</label>
                                                    <input type="text" name="address" placeholder="Enter address"
                                                           id="address" inputMode="address" value={form.location}
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               location: e.target.value
                                                           })}/>

                                                    <label htmlFor="gender">Gender</label>
                                                    <select name="gender" id="gender" defaultValue="gender"
                                                            onChange={(e) => setForm({
                                                                ...form,
                                                                gender: e.target.value
                                                            })}>
                                                        <option value="gender" disabled>Select your gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>

                                                    <label htmlFor="specialization">Specialization</label>
                                                    <select name="specialization" id="specialization"
                                                            defaultValue="specialization" onChange={(e) => setForm({
                                                        ...form,
                                                        specialization: e.target.value
                                                    })}>
                                                        <option value="specialization" disabled>Select your
                                                            specialization
                                                        </option>
                                                        <option value="Specialization #1">Specialization #1</option>
                                                        <option value="Specialization #2">Specialization #2</option>
                                                        <option value="Specialization #3">Specialization #3</option>
                                                    </select>

                                                    <label>Profile Image</label>
                                                    <label className="upload" htmlFor="profile">
                                                        <span>{form.image ? form.image.name : "No file uploaded"}</span>
                                                        <i className="fa fa-upload"> </i>
                                                    </label>
                                                    <input type="file" name="profile" id="profile"
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               image: e.target.files[0]
                                                           })}/>

                                                    <label>Certificate</label>
                                                    <label className="upload" htmlFor="certificate">
                                                        <span>{form.certificate ? form.certificate.name : "No file uploaded"}</span>
                                                        <i className="fa fa-upload"> </i>
                                                    </label>
                                                    <input type="file" name="certificate" id="certificate"
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               certificate: e.target.files[0]
                                                           })} accept="image/x-png,image/gif,image/jpeg, image/jpg"/>

                                                    <label>Country</label>
                                                    <CountryDropdown blacklist={['IL']} value={form.country}
                                                                     onChange={(country) => setForm({
                                                                         ...form,
                                                                         country: country,
                                                                         government: ""
                                                                     })}/>

                                                    <label>Government</label>
                                                    <RegionDropdown disableWhenEmpty={true} country={form.country}
                                                                    value={form.government} onChange={(gov) => setForm({
                                                        ...form,
                                                        government: gov
                                                    })}/>
                                                </form>

                                                <span className="required">*Required data</span>

                                                <div className="actions">
                                                    <button id="create-doctor" onClick={() => handleDoctorSignup()}>Create</button>

                                                    <Link to="/account/login" className="lost-pass-link">Already have an
                                                        account?</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="col-12">
                                    <h1>Create Pharmacist Account</h1>
                                    <p>Create an account now and communicate with patients easily and remotely.</p>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-lg-8 mx-auto">
                                                {error ? <div className={error.includes("Account created successfully") ? "alert-success" : "alert-danger"}>{error}</div> : null}
                                                <form method="post">
                                                    <label htmlFor="name">Name*</label>
                                                    <input type="text" name="name" placeholder="Enter Name"
                                                           id="name" inputMode="name" autoFocus value={form.name}
                                                           onChange={(e) => setForm({...form, name: e.target.value})}/>

                                                    <label htmlFor="email">Email*</label>
                                                    <input type="email" name="email" placeholder="Enter Email"
                                                           id="email" inputMode="email" value={form.email}
                                                           onChange={(e) => setForm({...form, email: e.target.value})}/>

                                                    <label htmlFor="email">Username*</label>
                                                    <input type="username" name="username" placeholder="Enter username"
                                                           id="username" value={form.username}
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               username: e.target.value
                                                           })}/>

                                                    <label htmlFor="password">Password*</label>
                                                    <input type="password" name="password" placeholder="Enter Password"
                                                           id="password" value={form.password}
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               password: e.target.value
                                                           })}/>

                                                    <label htmlFor="phone">Phone*</label>
                                                    <input type="text" name="phone" placeholder="Enter phone"
                                                           id="phone" inputMode="tel" value={form.phone}
                                                           onChange={(e) => setForm({...form, phone: e.target.value})}/>

                                                    <label htmlFor="address">Address*</label>
                                                    <input type="text" name="address" placeholder="Enter address"
                                                           id="address" inputMode="address" value={form.location}
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               location: e.target.value
                                                           })}/>

                                                    <label htmlFor="pharmacyName">Pharmacy Name*</label>
                                                    <input type="text" name="pharmacyName" placeholder="Enter Pharmacy Name"
                                                           id="pharmacyName" inputMode="name" value={form.pharmacyName}
                                                           onChange={(e) => setForm({...form, pharmacyName: e.target.value})}/>


                                                    <label>Profile Image</label>
                                                    <label className="upload" htmlFor="profile">
                                                        <span>{form.image ? form.image.name : "No file uploaded"}</span>
                                                        <i className="fa fa-upload"> </i>
                                                    </label>
                                                    <input type="file" name="profile" id="profile"
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               image: e.target.files[0]
                                                           })}/>

                                                    <label>Certificate</label>
                                                    <label className="upload" htmlFor="certificate">
                                                        <span>{form.certificate ? form.certificate.name : "No file uploaded"}</span>
                                                        <i className="fa fa-upload"> </i>
                                                    </label>
                                                    <input type="file" name="certificate" id="certificate"
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               certificate: e.target.files[0]
                                                           })} accept="image/x-png,image/gif,image/jpeg, image/jpg"/>

                                                    <label>Country</label>
                                                    <CountryDropdown blacklist={['IL']} value={form.country}
                                                                     onChange={(country) => setForm({
                                                                         ...form,
                                                                         country: country,
                                                                         government: ""
                                                                     })}/>

                                                    <label>Government</label>
                                                    <RegionDropdown disableWhenEmpty={true} country={form.country}
                                                                    value={form.government} onChange={(gov) => setForm({
                                                        ...form,
                                                        government: gov
                                                    })}/>
                                                </form>

                                                <span className="required">*Required data</span>

                                                <div className="actions">
                                                    <button id="create-pharmacist" onClick={() => handlePharmacistSignup()}>Create</button>

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
