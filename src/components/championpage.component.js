
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
import React, {useState, useEffect} from 'react'
import {Component} from 'react'
import axios from 'axios';
import Home from './home.component';
import styles from '../styles/championpagestyles.css';
import ChampionList from './champion-list.component'

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
    let imageSource = "../icons/" + props.match.params.id + ".png"
    console.log(imageSource)
    return (
        <div className="imageSourceClass">
            <img src={imageSource}></img>
        </div>
        
    )
}


function ChampionPage(props) {


  const [champion, setChampion] = useState(0)
  useEffect(() => {
    axios.get('https://bni-backend.herokuapp.com/champions/' + props.match.params.id)
		.then(response => {
			setChampion(response.data[0])
		})
		.catch((error) => {
		    console.log(error);
		})
  })


  console.log("DASDFASUIOFHSDILOUGFHSDGFYUILOHSDGILOUSDHGL:")
  console.log(props)
    return (
      <div>
        <img src={"../icons/" + props.match.params.id + '.png'}/>  {props.match.params.id} <br />
        {champion.buffAbility} | {champion.buffText} | {champion.buffDate} <br /> 
        {champion.nerfAbility} | {champion.nerfText} | {champion.nerfDate} <br /> <br />


        {/*<a href="/"><p>Home</p></a> */}
      </div>
    );
  
  }

export default ChampionPage;