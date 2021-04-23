import React, {useState} from 'react'
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



function ChampionPage(props) {

    const [name, setName] = useState(props.championName);
    

    return (
        <div className="myChampionPage">
            <a href="/"><p>Back to home page!</p></a>
            
            <p>{name}</p>
        </div>
      );
 
}

export default ChampionPage;