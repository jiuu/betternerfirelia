
/*
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


class ChampionPage extends Component {

    constructor(props) {
		super(props);

		this.state = {
			champion: []
		};
		
	}
    componentDidMount() {
		
		axios.get('http://localhost:5000/champions/' + this.props.match.params.id)
		.then(response => {
			this.setState({champion: response.data[0]})
            console.log(response.data[0])


		})
		.catch((error) => {
		console.log(error);
		})


	}


    render() {
        console.log('hey')
        
      return (
        <div>
          Info for {this.state.champion.name}
          
        <p>{this.state.champion.buffText}</p>


          <a href="/"><p>Back to home page!</p></a>
        </div>
        

        
      );
    }
  }

export default ChampionPage;

*/
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


class ChampionPage extends Component {

    constructor(props) {
		super(props);

		this.state = {
			champion: []
		};
		
	}
    componentDidMount() {
		
		axios.get('http://localhost:5000/champions/' + this.props.match.params.id)
		.then(response => {
			this.setState({champion: response.data[0]})
            console.log(response.data[0])


		})
		.catch((error) => {
		    console.log(error);
		})


	}


    render() {
        console.log('hey')
        
      return (
        <div>
          Info for {this.state.champion.name}
          
        <p>{this.state.champion.buffText}</p>


          <a href="/"><p>Back to home page!</p></a>
        </div>
        

        
      );
    }
  }

export default ChampionPage;