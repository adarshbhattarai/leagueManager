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
import Organizer from './pages/Organizer'

function App() {
  return (
    <div className="App">
    <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <Switch>
      <Route path="/" exact component={MainPage}></Route>
      <Route path="/randomizer" exact component={Randomizer}></Route>
      <Route path="/organize" exact component={Organizer}></Route>
      <Route path="/404" component={NotFound}></Route>
      <Route component={NotFound}></Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
