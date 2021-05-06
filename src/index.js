import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import storage from "./utilize/storage";
import API from "./utilize/API";
import jwtDecode from "jwt-decode";

// redux config
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import {Provider} from "react-redux";

// global styles
import "normalize.css";
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "./Layout/style/Main.scss";

/**
 * Self invoke function which ensures the validity of the user's token.
 * In the case of its validity, it makes an xhr-request to fetch the last update of his data.
 * This process takes place at the beginning of each user session.
 * @variable            User token from localStorage
 */
function verifyToken() {
    const token = storage("access-token");
    // todo: verify that token is valid
    if (token) {
        storage("m_ph_uu", jwtDecode(token)._id);
        if (jwtDecode(token).exp < Date.now() / 1000) {
            API("auth/logout", "POST")
                .then(({ status, data }) => {
                    if (status === 200) {
                        storage("access-token", null);
                        storage("user", null);
                        storage("role", null);
                    }
                })
        } else {
            API("auth/user", "GET")
                .then(({ status, data }) => {
                    if (status === 200) {
                        storage("user", data?.user);
                        storage("role", data?.role);
                    } else {
                        storage("access-token", null);
                        storage("user", null);
                        storage("role", null);
                    }
                })
        }
    }
    return {};
}
verifyToken();

const reduxStore = createStore(combineReducers({portal: reducer}), applyMiddleware(thunk));

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

reportWebVitals();
serviceWorkerRegistration.unregister();

