import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router";
import {useDispatch} from "react-redux";

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
import OnlinePayment from "./Layout/OnlinePayment";
import storage from "./utilize/storage";
import NewBlog from "./Layout/NewBlog";
// actions
import {loadCart} from "./actions";

export default function App() {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(true);

    useEffect(() => {
            if (storage("access-token")) {
                setAuth(storage("user")?.tokens[0]?.token === storage("access-token"));
            }
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
                    {auth ? [<Route key={1} path="/settings/:page" exact component={Settings}/>] : null}
                    <Route path="/cart" exact component={Cart}/>
                    <Route path="/blogs/:blog" exact component={SingleBlog} />
                    <Route path="/checkout" exact component={OnlinePayment} />
                    <Route path="/blog/create" exact component={NewBlog}/>
                    <Route path="*" exact component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}