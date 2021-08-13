import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App';
import "./index.css"



ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('app'))