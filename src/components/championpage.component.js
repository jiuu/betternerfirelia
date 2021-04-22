import React, {useState} from 'react'
import axios from 'axios';
 


function ChampionPage(props) {

    const [name, setName] = useState(props.championName);
    

    return (
        <div>
            <p>{name}</p>
        </div>
      );
 
}

export default ChampionPage;