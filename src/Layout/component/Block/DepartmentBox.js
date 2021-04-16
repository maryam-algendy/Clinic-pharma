import React from 'react';

// style
import "./style/DepartmentBox.scss";

export default function DepartmentBox(props)
{
    return <div id="department">
        <i className={props.icon}> </i>
        {props.department < 10 ? <span className="number">0{props.department}.</span> :
            <span className="number">{props.department}.</span>}
        <h5 className="title">{props.name}</h5>
        <p className="description">{props.about}</p>
        <button className="read-btn">Read More</button>
        <i className="fas fa-long-arrow-alt-right"> </i>
    </div>
}