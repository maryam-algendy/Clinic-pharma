import React from 'react';

// style
import './style/PageHeader.scss';

export default function PageHeader()
{
    return(
        <div id="page-header">
            <div className="content">
                <h2 className="title">All Doctors</h2>
                <span>
                    Home<i className="fas fa-angle-right"> </i>All Doctors
                </span>
            </div>
        </div>
    );
}