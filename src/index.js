import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import Login from './Component/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
      {/* <App /> */}
  </>
  ,document.getElementById('root')
);