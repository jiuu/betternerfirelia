import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/championliststyles.css';
import ChampionPage from './championpage.component';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  


const Champion = props => (
	
		<a id={props.key} href={"/champions/" + props.champion.name}>
			<img src={"../icons/" + (props.champion.name).replace(/'|\s|\.|\&/g,"") + ".png"}/>
		</a>
	
)

export default class ChampionList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			champions: []
		};
		
	}
	
	componentDidMount() {
		
		axios.get('198.211.113.222:5000/champions/')
		.then(response => {
			this.setState({champions: response.data})
		})
		.catch((error) => {
		console.log(error);
		})

	}
	championList() {
		let myKeyCounter = 0;
		return this.state.champions.map(currentchampion => {
			
			return <Champion key={myKeyCounter++} champion = {currentchampion}/>;
		})
	}

	render() {
		return(
			<Router>
				
			<Switch>
			
			<Route path="/champions/:id" component={ChampionPage} />
				<div className="championList">
						{this.championList()}
				</div>
			</Switch>
			</Router>
		)
	}
}