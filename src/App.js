import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ChampionList from "./components/champion-list.component";
import SearchSummoner from "./components/searchsummoner.component";
import Home from './components/home.component';
import "./styles/appstyles.css";
import MyNav from './components/navbar.component';
import About from './components/about.component';
import Contact from './components/contact.component';

function App() {
  return (
    <div class = "mainBody">
      
      <MyNav />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/search">
            <SearchSummoner />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
