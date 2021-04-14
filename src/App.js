import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ChampionList from "./components/champion-list.component";
import SearchSummoner from "./components/searchsummoner.component";
import "../src/styles/App.css";

function App() {
  return (
    <div>
      <Router>
/*
        <div className="container">
            <Navbar />
            <br/>
            <Route path="/" exact component={ChampionList} />
            <Route path="/champions/:id" component={ChampionList} />
*/
        <Navbar />
          <div className="testContainer">
          </div>
          <div className="summonerNameContainer">
            <SearchSummoner />
          </div>
      </Router>
    </div>
  );
}

export default App;
