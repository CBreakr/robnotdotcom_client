import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";

import RequestTester from "./RequestTester";

function App() {
  return (
    <>
    <RequestTester />
    <Link to="/a">Goto A</Link>
    <Link to="/b">Goto B</Link>
    <Switch>
      <Route path="/a">
        <div>route A</div>
      </Route>
      <Route path="/b">
        <div>route B</div>
      </Route>
      <Route>
        <div>unknown route</div>
      </Route>
    </Switch>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
