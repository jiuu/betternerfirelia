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
		let names = rows.map(x=> (x.innerText).split('\n')[0]);

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
	const EXCLUDES = ['BUG FIX', 'NEW EFFECT', 'REMOVED', 'UNDOCUMENTED', ]
	const EXCEPTIONS = ['Cooldown', 'Mana cost']
	buffAbility = null
	buffNote = null
	buffPatch = null
	nerfAbility = null
	nerfNote = null
	nerfPatch = null
	patchList = [];
	changeList = [];
	abilityList = [];
	
	//console.log(buffNote)
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
		let abilities = [...changes];
		abilities = abilities
			.map(x=> Array.from(x.querySelectorAll(':scope > li'))
				.map(x=>
					x.innerText.split('\n')[0]
				)
			)
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

    return [patches,changes,abilities];

	}).then(res => {
		patchList = res[0]
		changeList = res[1]
		abilityList = res[2]
		//console.log(res[1])
		//console.log(res[2])
	});

	for (i = 0; i < changeList.length; i++) {

		if (buffNote != null && nerfNote != null) {
			break;
		}
		if (patchList[i].includes('Added')) {
			break;
		}
		for (j = 0; j < changeList[i].length; j++) {
			let change = changeList[i][j]
			
			for (changeNote of change) {
				//console.log(changeNote)
				if (!EXCLUDES.map(x => changeNote.includes(x)).includes(true)) {
					if (changeNote.includes('increased')) {
						if (EXCEPTIONS.map(x=> changeNote.includes(x)).includes(true)){
							if (nerfNote == null) {
								nerfNote = changeNote
								nerfPatch = patchList[i].split(' ')[0]
								nerfAbility = abilityList[i][j]
							}

						} else if (buffNote == null) {
							buffNote = changeNote
							buffPatch = patchList[i].split(' ')[0]
							buffAbility = abilityList[i][j]
						}
					}
					if (changeNote.includes('reduced')) {
						if (EXCEPTIONS.map(x=> changeNote.includes(x)).includes(true)){
							if (buffNote == null) {
								buffNote = changeNote
								buffPatch = patchList[i].split(' ')[0]
								buffAbility = abilityList[i][j]


							}

						} else if (nerfNote == null) {
							nerfNote = changeNote
							nerfPatch = patchList[i].split(' ')[0]
							nerfAbility = abilityList[i][j]

						}
					}
			}
			
				
			}
		}
	}
	if (buffNote == null) {
		buffNote = `${name} has not been buffed yet`
	}
	
	if (nerfNote == null) {
		nerfNote = `${name} has not been nerfed yet`
	}
	console.log(buffPatch)
	
	console.log(nerfPatch)
	if (buffAbility != null && buffAbility.startsWith(" ")) {
		buffAbility = buffAbility.substring(1);
	}
	if (nerfAbility != null && nerfAbility.startsWith(" ")) {
		nerfAbility = nerfAbility.substring(1);
	}

	//console.log(typeof(buffPatch))
	await browser.close();	
    return [buffAbility, buffNote, buffPatch, nerfAbility, nerfNote, nerfPatch];

}

async function getDate(patch) {
	if (patch == null) {
		return ''
	}
	date = new Date()
	const browser = await puppeteer.launch();

	const page = await browser.newPage()

	URL = `https://leagueoflegends.fandom.com/wiki/${patch}`
	//console.log(URL);

	await page.goto(URL);
	await page.waitForSelector('[data-source="Release"]')

	await page.evaluate(() => {

		let table = document.querySelector('td[data-source="Release"]');
		let child = table.querySelector('sup');
		//document.querySelector('sup').remove()
		table.removeChild(child)
		return Date.parse(table.innerHTML);

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
/*getChampData('lillia')
.then((value)=> {
	getDate(value[1])
		.then((value) => {
			console.log(value)
	});
}) */
/*getChampData('irelia')
.then((value)=> {
	console.log(value)
});*/




module.exports.getChamps = getChamps;
module.exports.getChampData = getChampData;
module.exports.getDate = getDate;