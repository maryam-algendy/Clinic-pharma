import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

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

// todo: add redux configuration

const reduxStore = createStore(combineReducers({portal: reducer}), applyMiddleware(thunk));

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

reportWebVitals();
serviceWorkerRegistration.unregister();

