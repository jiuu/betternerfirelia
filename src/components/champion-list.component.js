import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Champion = props => (
	<p>{props.champion.name}</p>
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
			<div>
				<p>{this.championList()}</p>
			</div>
		)
	}
}