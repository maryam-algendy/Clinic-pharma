import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import API from "../utilize/API";
import storage from "../utilize/storage";

//
import "./style/GitAuthenticate.scss";

export default function GitAuthenticate() {
    useEffect(() => {
        if (storage("access-token")) {
            window.location.replace("/");
        }
    })

    const [form, setForm] = useState({ name: "", username: "", email: "", password: "", government: "", counter: "", phone: ""});
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
                                        <form action="post">
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
                        :
                        <div className="col-12">
                            <h1>Register</h1>
                            <p>Create New Account</p>

                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-8 mx-auto">
                                        <form action="post">
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
                    }
                </div>
            </div>
        </div>
    </div>
}