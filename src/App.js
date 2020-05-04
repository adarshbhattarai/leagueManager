import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
//import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
//import Header from './components/Header';

//Pages
import MainPage from './pages';
import NotFound from './pages/404';
import Randomizer from './pages/Randomizer'

function App() {
  return (
    <div className="App">
    <Header/>
    <Router>
      <Switch>
      <Route path="/leagueManager/" exact component={MainPage}></Route>
      <Route path="/leagueManager/randomizer" exact component={Randomizer}></Route>
      <Route path="/leagueManager/404" component={NotFound}></Route>
      <Route component={NotFound}></Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
