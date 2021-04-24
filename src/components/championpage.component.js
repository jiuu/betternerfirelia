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


function BasicChampionInfo(props) {


    return (
        <div>
            
        </div>
    )
}

function ChampionIcon(props) {
    console.log(props)
    let imageSource = "../icons/" + props + ".png"
    console.log(imageSource)
    return (
        <div className="imageSourceClass">
            <img src={imageSource}></img>
        </div>
        
    )
}



function ChampionPage(props) {

    const [name, setName] = useState(props.championName);
    

    return (
        <div className="myChampionPage">
            <a href="/"><p>Back to home page!</p></a>

            <p>{name}</p>
            {ChampionIcon(name)}
        </div>
      );
 
}

export default ChampionPage;