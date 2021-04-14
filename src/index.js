import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// global styles
import "normalize.css";
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "./Layout/style/Main.scss";

// todo: add redux configuration

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
serviceWorkerRegistration.register();

