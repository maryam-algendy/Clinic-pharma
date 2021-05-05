import React from 'react';

// style
import "./style/DepartmentBox.scss";

export default function DepartmentBox(props)
{
    return <div id="department">
        <i className={props.icon}> </i>
        {props.departments < 10 ? <span className="number">0{props.departments}.</span> :
            <span className="number">{props.departments}.</span>}
        <h5 className="title">{props.title}</h5>
        <p className="description">{props.description}</p>
        <button className="read-btn">{props.textOnLink}</button>
        <i className="fas fa-long-arrow-alt-right"> </i>
    </div>
}