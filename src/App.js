import React, {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router";

// pages
import Home from "./Layout/Home";
import MainNavbar from "./Layout/component/Navbar";
import Footer from "./Layout/component/Footer";
import GitAuthenticate from "./Layout/GitAuthenticate";
import AllDoctors from "./Layout/AllDoctors";
import MedicineDetails from "./Layout/MedicineDetails";
import Shop from './Layout/Shop'
import SingleDoctor from "./Layout/SingleDoctor";
import NotFound from "./Layout/NotFound";
import Contact from "./Layout/Contact";
import About from "./Layout/About";
import Settings from "./Layout/Settings";
import Cart from "./Layout/Cart";
import SingleBlog from "./Layout/SingleBlog";
import {useDispatch} from "react-redux";
import {loadCart} from "./actions";

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCart());
    }, [dispatch])

    return (
        <div id="clinic-pharma">
            <BrowserRouter>
                <MainNavbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/account/:page" exact component={GitAuthenticate} />
                    <Route path="/doctors" exact component={AllDoctors} />
                    <Route path="/shop/:slug" exact component={MedicineDetails} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/doctor/:doc" exact component={SingleDoctor} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/about" exact component={About} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/cart" exact component={Cart}/>
                    <Route path="/blogs/:blog" exact component={SingleBlog} />
                    <Route path="*" exact component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}