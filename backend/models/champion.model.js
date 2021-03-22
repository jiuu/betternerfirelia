const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const champSchema = new Schema({
	name: {
		type:String,
		required: true,
		unique: true,
		trim: true,
		minlength: 1
	},
},	{
	timestamps: true, 
});

const Champion = mongoose.model('Champion', champSchema);

module.exports = Champion;