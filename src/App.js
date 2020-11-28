import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="AppDiv">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
