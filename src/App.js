import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accueil from './Accueil';
import Contact from './Contact';
import Projets from './Projets';
import Navigation from './Navigation';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" exact component={Accueil} />
        <Route path="/projets" exact component={Projets} />
        <Route path="/contact" exact component={Contact} />




      </Router>
    </div>
  );
}

export default App;
