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
	buffText: {
		type: String,
		required: false,
		default: "",
	},
	buffDate: {
		type: Date,
		required: false,
		default: new Date(),	
	},
	nerfText: {
		type: String,
		required: false,
		default: ""
	},
	nerfDate: {
		type: Date,
		required: false,
		default: new Date()
		
	},
},	{
	timestamps: true, 
});

const Champion = mongoose.model('Champion', champSchema);

module.exports = Champion;