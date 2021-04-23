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
        API("patient/auth/logout", "POST")
            .then(({ data, status }) => {
                storage("access-token", null);
                storage("user", null);
                setTimeout(() => {
                    window.location.replace("/");
                }, 1000);
            })
    }

    return (
        <div className={userSection ? "d-block" : "d-none"} id="userSection">
            <div className="user-list">
                <Link to="/settings/profile">Settings</Link>
                <Link to="/settings/orders">Order</Link>
                <Link to="/settings/payments">Payment</Link>
                <Link to="/settings/appointments">Appointment</Link>
                <button onClickCapture={() => handleLogOut()} style={{color: "#396cf0", border: "none"}}>Logout</button>
            </div>
        </div>
    );
}