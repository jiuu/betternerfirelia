

import React, {useState, useEffect} from 'react'
import axios from 'axios';
import championMock from '../mocks/mocks';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";


// function BasicChampionInfo(props) {


//     return (
//         <div>
            
//         </div>
//     )
// }

// function ChampionIcon(props) {
//     console.log(props)
//     let imageSource = "../icons/" + props.match.params.id + ".png"
//     console.log(imageSource)
//     return (
//         <div className="imageSourceClass">
//             <img src={imageSource}></img>
//         </div>
        
//     )
// }


function ChampionPage(props) {

  const divStyle = { marginLeft:'auto', marginRight:'auto', maxWidth:'fit-content', textAlign:'center' ,marginBottom:'2rem'}
  const containerStyle = {backgroundColor:'#00000082', padding:'1rem'}
  

  const [championInfo, setChampionInfo] = useState()
  let mocks = true
  useEffect(() => {
    if(!mocks) {

     axios.get('https://bni-backend.herokuapp.com/champions/' + props.match.params.id)
		.then(response => {
			setChampionInfo(response.data[0])
		})
		.catch((error) => {
		    console.log(error);
		})
  } else {
    setChampionInfo(championMock[props.match.params.id])
    console.log(championInfo)
  }
    
  }, [])


    return (
      <div style={{color:'white' }}>
        <div style={divStyle}>
          <img style ={{marginBottom:'4px'}}src={"../icons/" + props.match.params.id + '.png'}/> 
          <h1 >  {props.match.params.id}</h1>
        </div>
        <div class={'container rounded'} style={{marginBottom:'1rem'}}>
          <h3>Buff</h3>
          <h5  style={containerStyle}>{championInfo?.buffAbility} : {championInfo?.buffText} | {championInfo?.buffDate}</h5> 

        </div>
        <div class={'container rounded'}>
          <h3>Nerf</h3>
          <h5 class={'container rounded'} style={containerStyle}>{championInfo?.nerfAbility} : {championInfo?.nerfText} | {championInfo?.nerfDate} </h5>
        </div>

        {/*<a href="/"><p>Home</p></a> */}
      </div>
    );
  
  }

export default ChampionPage;