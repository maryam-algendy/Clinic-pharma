import React, {useEffect, useState} from "react";
import {Navbar} from 'react-bootstrap';

// block
import UserSection from './Block/UserSection';
import SearchBar from './Block/SearchBar';

// style
import "./style/Navbar.scss";
import storage from "../../utilize/storage";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function MainNavbar()
{
    const [authenticatedUser, setAuthenticatedUser] = useState(false);
    const [userSection, setUserSection] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const cart = useSelector(state => state.portal.cart);
    useEffect(() => {
        storage("access-token") ? setAuthenticatedUser(true) : setAuthenticatedUser(false);
        document.addEventListener("click", () => {
            if(userSection || searchBar)
                setUserSection(false);
                setSearchBar(false);
        });
    }, [userSection, searchBar]);

    return(
        <div id="navbar">
            <Navbar expand="lg">
                <div className="container">
                    <Navbar.Brand href="/">
                        <img
                            src="/background-logo.jpg"
                            width="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="blocks">
                            <ul className="nav-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/doctors">Doctors</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                {authenticatedUser ? <li><Link to="/blog/create">Add Blog</Link></li> : null}
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="icons">
                            <button className="icon">
                                <i
                                    className="flaticon-search"
                                    onClick={(e) => {
                                        if (searchBar || userSection) {
                                            setSearchBar(true);
                                            setUserSection(false);
                                        } else {
                                            e.stopPropagation();
                                        }
                                        setSearchBar(!searchBar);
                                    }}
                                > </i>
                                <SearchBar searchBar={searchBar} />
                            </button>
                            <button className="icon" onClick={() => window.location.replace("/cart")}>
                                <i className="flaticon-shopping-cart"> </i>
                                <span className="counter">{cart?.products?.length || 0}</span>
                            </button>
                            {!authenticatedUser ? <button onClick={() => window.location.replace("/account/login")} className="btn">Login/Register</button> : null}
                            {authenticatedUser ? <><img
                                className="user-logo"
                                src="https://res.cloudinary.com/medical-pharma/image/upload/v1618573386/Assets/team/team04_sal7db.png"
                                alt="User Section"
                                onClick={(e) => {
                                    if (userSection || searchBar) {
                                        setUserSection(true);
                                        setSearchBar(false);
                                    } else {
                                        e.stopPropagation();
                                    }
                                    setUserSection(!userSection);
                                }}
                            />
                                <UserSection userSection={userSection}/></> : null}
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}