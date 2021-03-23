const puppeteer = require('puppeteer');



async function getChamps() {
	champList = [];
	const browser = await puppeteer.launch();

	const page = await browser.newPage()

	URL = 'https://leagueoflegends.fandom.com/wiki/List_of_champions'
	await page.goto(URL);
	await page.content()
	await page.evaluate(() => {

		let table = document.querySelector('[class="article-table sticky-header sortable jquery-tablesorter"]');
		let tablerows = Array.from(table.querySelectorAll('[data-champion]'));
		let rows = tablerows.map(x=> x.querySelector('a'));
		let names = rows.map(x=> (x.innerHTML).split('<br>')[0]);

    return names;

	}).then(res => {
		champList = res;
	});
	//console.log(await page.content());

	//const element = await page.$('[class="article-table sticky-header sortable jquery-tablesorter"]');
	//table_body = await element.$('tbody');
	//table_rows = await table_body.$('tr');
	//console.log(await element.text);
	await browser.close();	
	//console.log(champList);

	return champList;
}
async function getChampData(name) {
	const EXCLUDES = ['BUG FIX', 'NEW EFFECT']
	const EXCEPTIONS = ['Cooldown', 'Mana cost']
	buffNote = null
	nerfNote = null
	buffPatch = null
	nerfPatch = null
	patchList = [];
	changeList = [];
	
	console.log(buffNote)
	const browser = await puppeteer.launch();
	const page = await browser.newPage()

	URL = `https://leagueoflegends.fandom.com/wiki/${name}/LoL/Patch_history`
	await page.goto(URL);
	await page.waitForSelector('[class="mw-parser-output"]')
	await page.evaluate(() => {

		let div = document.querySelector('[class="mw-parser-output"]');
		let patches = Array.from(div.querySelectorAll('dl'));
		patches = patches.map(x=> x.innerText)
		let changes = Array.from(div.querySelectorAll(':scope > ul'));
		changes = changes
			.map(x=> Array.from(x.querySelectorAll(':scope > li'))
				.map(x=>
					Array.from(x.querySelectorAll('li'))
					.map(x=>
						x.innerText
					)
				)
			)
		//changes = changes.map(y=> Array.from(y.querySelectorAll('li')))

    return [patches,changes];

	}).then(res => {
		patchList = res[0]
		changeList = res[1]
	});

	for (i = 0; i < changeList.length; i++) {
		if (buffNote != null && nerfNote != null) {
			break;
		}
		for(change of changeList[i]) {
			for (changeNote of change) {

				if (!EXCLUDES.map(x => changeNote.includes(x)).includes(true)) {
					if (changeNote.includes('increased')) {
						if (EXCEPTIONS.map(x=> changeNote.includes(x)).includes(true)){
							if (nerfNote == null) {
								nerfNote = changeNote
								nerfPatch = patchList[i]
							}

						} else if (buffNote == null) {
							buffNote = changeNote
							buffPatch = patchList[i]
						}
					}
					if (changeNote.includes('reduced')) {
						if (EXCEPTIONS.map(x=> changeNote.includes(x)).includes(true)){
							if (buffNote == null) {
								buffNote = changeNote
								buffPatch = patchList[i]
							}

						} else if (nerfNote == null) {
							nerfNote = changeNote
							nerfPatch = patchList[i]
						}
					}
			}
			
				
			}
		}
	}
	console.log(buffNote)
	console.log(nerfNote)

	console.log(typeof(buffPatch))
	await browser.close();	
    return buffPatch;

}

async function getDate(patch) {
	date = new Date()
	const browser = await puppeteer.launch();

	const page = await browser.newPage()

	URL = `https://leagueoflegends.fandom.com/wiki/${patch}`
	console.log(URL);

	await page.goto(URL);
	await page.waitForSelector('[data-source="Release"]')

	await page.evaluate(() => {

		let table = document.querySelector('td[data-source="Release"]');
		document.querySelector('sup').remove()
		return Date.parse(table.innerText);

	}).then(res => {
		date = res
	});
	//console.log(await page.content());

	//const element = await page.$('[class="article-table sticky-header sortable jquery-tablesorter"]');
	//table_body = await element.$('tbody');
	//table_rows = await table_body.$('tr');
	//console.log(await element.text);
	await browser.close();	
	//console.log(champList);

	return date;
}


/*getChamps()
.then((value) => {
	console.log(value)
});*/
getChampData('Irelia')
.then((value)=> {
	getDate(value)
		.then((value) => {
			console.log(value)
	});
})


module.exports.getChamps = getChamps;