const router = require('express').Router();
let Champion = require('../models/champion.model');

router.route('/').get((req,res) => {
	Champion.find({}, null, {sort:{name:1}})
		.then(champions => res.json(champions))
		.catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
	const champname = req.body.name;

	const newChamp = new Champion({name: champname});

	newChamp.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
	Champion.findById(req.params.id)
	.then(champion => res.json(champion))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	Champion.findByIdAndDelete(req.params.id)
	.then(() => res.json('Exercise deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
	Champion.findById(req.params.id)
	.then((champion) => {
		champion.name = req.body.name;

		champion.save()
		.then(() => res.json('Champion updated!'))
		.catch(err => res.status(400).json('Error: ' + err));
	})
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

