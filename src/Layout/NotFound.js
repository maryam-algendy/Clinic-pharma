import React from 'react';
import {Link} from "react-router-dom";

//
import "./style/NotFound.scss";

export default function NotFound()
{
    return <div id="not-found">
        <img className="img-fluid" src="/404.png" alt="404" />
        <span>OOPS! Page not found</span>
        <p>I know you are looking for water but sorry, dude! It's a desert.</p>
        <Link to="/">Go back Home</Link>
    </div>
}