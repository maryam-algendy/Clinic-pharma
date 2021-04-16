import React, {useEffect} from 'react';

// style
import './style/UserSection.scss';
import API from "../../../utilize/API";
import storage from "../../../utilize/storage";

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
                setTimeout(() => {
                    window.location.replace("/");
                }, 1000);
            })
    }

    return(
        <div className={userSection ? "d-block" : "d-none"} id="userSection">
            <div className="user-list">
                <a href="/">Profile</a>
                <a href="/">Order</a>
                <a href="/">Payment</a>
                <a href="/">Appointment</a>
                <a href="/">Settings</a>
                <button onClickCapture={() => handleLogOut()} style={{color: "#396cf0", border: "none"}} href="/">Logout</button>
            </div>
        </div>
    );
}