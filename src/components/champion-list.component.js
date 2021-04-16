import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/championliststyles.css';


const Champion = props => (
	
		<a href={"http://localhost:3000/champions/" + props.champion.name}>
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
			
			return <Champion champion = {currentchampion}/>;
		})
	}

	render() {
		return(
			<div className="championList">
				<p>{this.championList()}</p>
			</div>
		)
	}
}