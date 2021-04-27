import React from "react";
import "./style/RelatedPosts.scss";

export default function RelatedPosts (props)
{
    return (
        <div className="post">
            <div className="avatar">
                <img alt="not found" src={props.avatar} />
            </div>
            <div className="text">
                <span className="date">{props.date}</span>
                <p>{props.text}</p>
            </div>
        </div>

    )
}