import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router";

// pages
import Home from "./Layout/Home";
import MainNavbar from "./Layout/component/Navbar";
import Footer from "./Layout/component/Footer";
import GitAuthenticate from "./Layout/GitAuthenticate";
import AllDoctors from "./Layout/AllDoctors";

export default function App() {
    return (
        <div id="clinic-pharma">
            <BrowserRouter>
                <MainNavbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/account/:page" exact component={GitAuthenticate} />
                    <Route path="/all-doctors" exact component={AllDoctors} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}