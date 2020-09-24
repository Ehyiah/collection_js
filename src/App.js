import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, withRouter} from "react-router-dom";
import Collections from './Component/Collection2';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/collections">
          <Collections />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
