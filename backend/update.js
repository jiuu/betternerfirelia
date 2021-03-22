const cron = require('node-cron');
const scrape = require('./scrape');
const axios = require('axios');
/*cron.schedule('* * *', () => {
  dailyTask()

});*/


async function dailyTask() {
	let myChampList = await scrape.getChamps();
	console.log(myChampList);
	myChampList.map(x => {
		axios.post('http://localhost:5000/champions/add/', {
			name: x
		})
	})
}

//this is a test
dailyTask();

//changing for another test