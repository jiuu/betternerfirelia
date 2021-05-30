const cron = require('node-cron');
const scrape = require('./scrape');
const axios = require('axios');
/*cron.schedule('* * *', () => {
  dailyTask()

});*/


async function dailyTask() {
	let champList = await scrape.getChamps();
	//let champData = null;
	console.table(champList);
	console.log(champList);
	var vari = 1
	for(champ of champList) {
		console.log(champ)

		champData = await scrape.getChampData(champ)
		dsBuff = await scrape.getDate(champData[2])
		console.log(dsBuff)
		dsNerf = await scrape.getDate(champData[5])
		/*axios.post('http://localhost:5000/champions/add/', {
			name: champ,
			buffability: champData[0],
			bufftext: champData[1],
			buffdate: Date.now,
			nerfability: champData[3],
			nerftext: champData[4],
			nerfdate: Date.now
		})*/
		
		axios.put(`http://localhost:5000/champions/update/${champ}`, {
			name: champ,
			buffability: champData[0],
			bufftext: champData[1],
			buffdate: dsBuff,
			nerfability: champData[3],
			nerftext: champData[4],
			nerfdate: dsNerf
		}).catch(error => {
			console.log(error.message)
		})
	
		
	}
	/*champList.map(x => 
		champData = scrape.getChampData(x)

		axios.post('http://localhost:5000/champions/add/', {
			name: x,
			bufftext: champData[0],
			//buffDate:
			nerftext: champData[2],
			//nerfDate:
		})
	)*/
}

//this is a test
dailyTask();

//changing for another test