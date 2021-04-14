import React, {useEffect} from 'react';

// style
import './style/UserSection.scss';

export default function UserSection({userSection})
{
    const user = document.getElementById("userSection");
    useEffect(() => {
        user?.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }, [userSection, user]);

    return(
        <div className={userSection ? "d-block" : "d-none"} id="userSection">
            <div className="user-list">
                <a href="/">Profile</a>
                <a href="/">Order</a>
                <a href="/">Payment</a>
                <a href="/">Appointment</a>
                <a href="/">Settings</a>
                <a style={{color: "#396cf0", border: "none"}} href="/">Logout</a>
            </div>
        </div>
    );
}