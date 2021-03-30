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
	for(champ of champList) {
		console.log(champ)

		champData = await scrape.getChampData(champ)
		axios.post('http://localhost:5000/champions/add/', {
			name: champ,
			bufftext: champData[0],
			buffDate: Date.now,
			nerftext: champData[2],
			nerfDate: Date.now
		}).catch(error => {
			console.log(error.message);
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