import React from 'react';

// style
import './style/PageHeader.scss';

export default function PageHeader(props)
{
    return(
        <div id="page-header">
            <div className="container">
                {props.title && <h2 className="title">{props.title}</h2>}
                <span>
                    Home<i className="fas fa-angle-right"> </i>
                </span>
                {props.firstLocation && <span>
                    {props.firstLocation}
                </span>}
                {props.secondLocation && <span>
                    <i className="fas fa-angle-right"> </i>{props.secondLocation}
                </span>}
            </div>
        </div>
    );
}