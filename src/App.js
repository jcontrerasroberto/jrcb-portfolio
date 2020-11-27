import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Work from './components/pages/Work';


function App() {
  return (
    <div className="AppDiv">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
