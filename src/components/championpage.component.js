import React, {useState} from 'react'
import {Component} from 'react'
import axios from 'axios';
import Home from './home.component';
import styles from '../styles/championpagestyles.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";


function basicChampionInfo(props) {


    return (
        <div>
            
        </div>
    )
}

function championIcon(props) {
    

    return (
        <div>

        </div>
    )
}


class ChampionPage extends Component {
    render() {
      return (
        <div>
          Info for {this.props.match.params.id}
          <a href="/"><p>Back to home page!</p></a>
        </div>
        

        
      );
    }
  }

export default ChampionPage;