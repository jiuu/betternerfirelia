import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ChampionList from "./components/champion-list.component";
import SearchSummoner from "./components/searchsummoner.component";
import Home from './components/home.component';
import "./styles/appstyles.css";
import MyNav from './components/navbar.component';

function App() {
  return (
    <div className = "poop">
      <MyNav />
    </div>
  );
}

export default App;
