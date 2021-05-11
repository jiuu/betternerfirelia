const router = require('express').Router();
let Champion = require('../models/champion.model');

router.route('/').get((req,res) => {
	Champion.find({}, null, {sort:{name:1}})
		.then(champions => res.json(champions))
		.catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
	const champname = req.body.name;

	const newChamp = new Champion({
	name: req.body.name,
	buffAbility: req.body.buffability,
	buffText: req.body.bufftext,
	buffDate: req.body.buffdate,
	nerfAbility: req.body.nerfability,
	nerfText: req.body.nerftext,
	nerfDate: req.body.nerfdate
	});

	newChamp.save()
		.then(() => res.json('Champion added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
	Champion.find({name: req.params.id})  //change to not care about upperlowercase later
	.then(champion => res.json(champion))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	Champion.findByIdAndDelete(req.params.id)
	.then(() => res.json('Champion deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
	const filter = { name: req.params.id}
	const update = {
		
		buffAbility: req.body.buffability,
		buffText: req.body.bufftext,
		buffDate: req.body.buffdate,
		nerfAbility: req.body.nerfability,
		nerfText: req.body.nerftext,
		nerfDate: req.body.nerfdate}
	Champion.findOneAndUpdate(filter, update, {returnOriginal: false})
	/*
	Champion.findById(req.params.id)
	.then((champion) => {
		champion.name = req.body.name;
		champion.buffAbility = req.body.buffability;
		champion.buffText = req.body.bufftext;
		champion.buffDate = req.body.buffdate;
		champion.nerfAbility = req.body.nerfability;
		champion.nerfText = req.body.nerftext;
		champion.nerfDate = req.body.nerfdate;

		champion.save()
		.then(() => res.json('Champion updated!'))
		.catch(err => res.status(400).json('Error: ' + err));
	})
	.catch(err => res.status(400).json('Error: ' + err));*/
});

module.exports = router;

