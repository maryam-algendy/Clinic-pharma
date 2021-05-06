import React  from 'react';

export default function MessageBox(props)
{
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let time    = new Date(props.msgTime);
    let year    = time.getUTCFullYear();
    let month   = months[time.getUTCMonth()];
    let day     = time.getDate();
    let hour = time.getUTCHours();
    let minutes = time.getUTCMinutes();

    if (hour > 12) {
        hour -= 12;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }


    return <div className={props?.sender ? "media w-50 mb-3" : "media w-50 ml-auto mb-3"}>
        {props?.sender ? <img src={props.image} alt="user" width="50" className="rounded-circle"/> : null}
        <div className={props?.sender ? "media-body ml-3" : "media-body"}>
            <div
                className={props?.sender ? "bg-light rounded py-2 px-3 mb-2" : "bg-primary rounded py-2 px-3 mb-2"}>
                <p className={props?.sender ? "text-small mb-0 text-muted" : "text-small mb-0 text-white"}>{props?.msg}</p>
            </div>
            <p className="small text-muted">{day + " " + month + " " + year + " - " + hour + ":" + minutes}</p>
        </div>
    </div>
}