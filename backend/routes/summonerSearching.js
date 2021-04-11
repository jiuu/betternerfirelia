const { RiotAPI, RiotAPITypes, PlatformId } = require('@fightmegg/riot-api');
var express = require('express');
var router = express.Router();

require('@fightmegg/riot-api');

require('dotenv').config();

const uri = process.env.ATLAS_URI;
const riot_api_key = process.env.RIOT_API_KEY;

async function getSummonerData()  {
    const rAPI = new RiotAPI('RGAPI-KEY');

    const summoner = await rAPI.summoner.getBySummonerName({
        region: PlatformId.EUW1,
        summonerName: "Demos Kratos",
      });
}


router.get('/searchForSummoner/:summonerName', (req,res) => {
    myStuff = getSummonerData()
    .then(json => console.log(json))
    res.json({test: 'testing'})
})
module.exports = router;