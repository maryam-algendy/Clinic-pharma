import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router";

// pages
import Home from "./Layout/Home";
import Navbar from "./Layout/component/Navbar";
import Footer from "./Layout/component/Footer";

export default function App() {
    return (
        <div id="clinic-pharma">
            <Navbar />

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>

            <Footer />
        </div>
    );
}