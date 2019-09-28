import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

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
