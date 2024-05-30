import React, {useEffect, useState} from 'react';
import ChampionPage from './championpage.component';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  


const Champion = props => (
	
		<a id={props.key} href={"/champions/" + props.champion}>
			<img src={"../icons/" + (props.champion).replace(/'|\s|\.|\&/g,"") + ".png"}/>
		</a>
	
)

function ChampionList() {
	const [champions, setChampions] = useState([])
	let champKey = 0;
	
	useEffect(() => {
		async function fetchChamps() {
			let response = await fetch('https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US/champion.json');
			let data = await response.json();
			let champs = Object.keys(data.data).sort(); // Extracting champion names and sorting them
			setChampions(champs)
		}
		fetchChamps()
		
	}, [])

			
		 
		

	
		return(
			<Router>
				
			<Switch>
			
			<Route path="/champions/:id" component={ChampionPage} />
				<div className="championList">
						{champions.map(champ => {
							return <Champion key={champKey++} champion={champ} />
						})}
				</div>
			</Switch>
			</Router>
		)
	
}

export default ChampionList