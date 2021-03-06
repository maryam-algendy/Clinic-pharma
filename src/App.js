import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { useDispatch } from "react-redux";

// pages
import Home from "./Layout/Home";
import MainNavbar from "./Layout/component/Navbar";
import Footer from "./Layout/component/Footer";
import GitAuthenticate from "./Layout/GitAuthenticate";
import AllDoctors from "./Layout/AllDoctors";
import Appointment from "./Layout/Appointment";
import MedicineDetails from "./Layout/MedicineDetails";
import Shop from './Layout/Shop'
import SingleDoctor from "./Layout/SingleDoctor";
import NotFound from "./Layout/NotFound";
import Contact from "./Layout/Contact";
import About from "./Layout/About";
import Settings from "./Layout/Settings";
import Cart from "./Layout/Cart";
import Blogs from "./Layout/Blogs";
import OnlinePayment from "./Layout/OnlinePayment";
import storage from "./utilize/storage";
import NewBlog from "./Layout/NewBlog";
// actions
import { loadBlogs, loadCart, loadSlides, loadTopDoctors } from "./actions";
import SingleBlog from "./Layout/SingleBlog";
import Chat from "./Layout/Chat";
import MedicalHistory from "./Layout/MedicalHistory";

export default function App () {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        // api calls
        dispatch(loadCart());
        dispatch(loadSlides());
        dispatch(loadBlogs());
        dispatch(loadTopDoctors());

        if (storage("access-token")) {
            setAuth(storage("user")?.tokens[0]?.token === storage("access-token"));
        }

        /**
         * If it's production mode, prevent inspector!
         */
        if (process.env.REACT_APP_MODE !== "DEV") {
            // prevent contextmenu
            document.addEventListener('contextmenu', event => event.preventDefault());

            // prevent open inspector
            document.onkeydown = function (e) {
                if (e.keyCode === 123) {
                    console.log('Your presence here for any reason will put you on the blacklist, and action will be taken with you, but your data is also vulnerable.');
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
                    console.log('Your presence here for any reason will put you on the blacklist, and action will be taken with you, but your data is also vulnerable.');
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
                    console.log('Your presence here for any reason will put you on the blacklist, and action will be taken with you, but your data is also vulnerable.');
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
                    console.log('Your presence here for any reason will put you on the blacklist, and action will be taken with you, but your data is also vulnerable.');
                    return false;
                }
                if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
                    console.log('Your presence here for any reason will put you on the blacklist, and action will be taken with you, but your data is also vulnerable.');
                    return false;
                }
            }
        }
    }, [dispatch]);

    return (
        <div id="clinic-pharma">
            <BrowserRouter>
                <MainNavbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/account/:page" exact component={GitAuthenticate}/>
                    <Route path="/doctors" exact component={AllDoctors}/>
                    <Route path="/appointment/request" exact component={Appointment}/>
                    <Route path="/shop/:slug" exact component={MedicineDetails}/>
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/doctor/:doc" exact component={SingleDoctor}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/about" exact component={About}/>
                    {auth ? [<Route key={1} path="/settings/:page" exact component={Settings}/>,
                        <Route key={2} path="/blog/create" exact component={NewBlog}/>] : null}
                    <Route path="/cart" exact component={Cart}/>
                    <Route path="/blogs" exact component={Blogs}/>
                    <Route path="/blogs/:slug" exact component={SingleBlog}/>
                    <Route path="/checkout" exact component={OnlinePayment}/>
                    <Route path="/chat" exact component={Chat}/>
                    <Route path="/history/:patient" exact component={MedicalHistory}/>
                    <Route path="*" exact component={NotFound}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
