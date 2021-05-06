import React from "react";

export default function ChatBox(props)
{
    return <div className="media" title={props?.lastMsg}>
        <img src={props?.avatar} alt="user" width="50" className="rounded-circle"/>
        <div className="media-body ml-2">
            <div className="d-flex align-items-center justify-content-between mb-1">
                <h6 className="mb-0">{props?.name}</h6><small
                className="small font-weight-bold">{props.lastMsgDate}</small>
            </div>
            <p className="font-italic mb-0 text-small last-message">{props.lastMsg}</p>
        </div>
    </div>
}