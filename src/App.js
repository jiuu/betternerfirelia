import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchSummoner from "./components/searchsummoner.component";
import "./styles/appstyles.css";
import MyNav from './components/navbar.component';
import About from './components/about.component';
import Contact from './components/contact.component';
import ChampionList from './components/champion-list.component';

function App() {
  const appStyles= {minHeight: '100vh',  // At least full viewport height
  width: '100%',
  backgroundImage: 'url("../background.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'}


  return (
    <div style={appStyles} >
      
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
            <ChampionList />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
