import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ChampionList from "./components/champion-list.component";
import SearchSummoner from "./components/searchsummoner.component";
import Home from './components/home.component'
import "./styles/appstyles.css";

function App() {
  return (
    <div className = "poop">
        <Navbar />
    </div>
  );
}

export default App;
