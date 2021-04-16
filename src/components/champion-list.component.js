import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/championliststyles.css';
import IndividualChampion from './individualchampion.component';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";


const Champion = props => (
	
		<a href={"/champions/" + props.champion.name}>
			<img src={"http://localhost:3000/icons/" + (props.champion.name).replace(/'|\s|\.|\&/g,"") + ".png"}/>
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
		axios.get('http://localhost:5000/champions/')
		.then(response => {
			this.setState({champions: response.data})
		})
		.catch((error) => {
		console.log(error);
		})

	}
	championList() {

		return this.state.champions.map(currentchampion => {
			
			return <Champion id="myChampion" champion = {currentchampion}/>;
		})
	}

	render() {
		return(
			<Router>
				
			<Switch>
			
				<Route path="/Bard">
					<p>Tessdasdasdsdsdt</p>
					<IndividualChampion championName="Bard" />
				</Route>
				<Route path="/">
					<p> Testing Stuff</p>
					<div className="championList">
						{this.championList()}
					</div>
				</Route>
			</Switch>
			</Router>
		)
	}
}