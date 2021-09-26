import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/name">
            <h1>Name</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
