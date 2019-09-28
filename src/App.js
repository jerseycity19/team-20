import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" render={HomePage} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
