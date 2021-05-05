import React, {useEffect} from 'react';

// style
import './style/UserSection.scss';
import API from "../../../utilize/API";
import storage from "../../../utilize/storage";
import {Link} from "react-router-dom";

export default function UserSection({userSection})
{
    const user = document.getElementById("userSection");
    useEffect(() => {
        user?.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }, [userSection, user]);

    function handleLogOut() {
        document.querySelector("#logout-btn").innerHTML = `<div class="spinner-border text-primary m-auto" role="status"></div>`
        API("auth/logout", "POST")
            .then(({ data, status }) => {
                storage("access-token", null);
                storage("user", null);
                storage("role", null);
                document.querySelector("#logout-btn").innerHTML = `Logout`
                setTimeout(() => {
                    window.location.replace("/");
                }, 500);
            })
    }

    return (
        <div className={userSection ? "d-block" : "d-none"} id="userSection">
            <div className="user-list">
                <Link to="/settings/profile">Settings</Link>
                <Link to="/settings/orders">Order</Link>
                <Link to="/settings/payments">Payment</Link>
                <Link to="/settings/appointments">Appointment</Link>
                <button id="logout-btn" onClickCapture={() => handleLogOut()} style={{color: "#396cf0", border: "none"}}>Logout</button>
            </div>
        </div>
    );
}