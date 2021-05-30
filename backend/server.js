const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const testRouter = require('./routes/summonerSearching');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useFindAndModify: false});
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const championsRouter = require('./routes/champions');

app.get('/', (req,res) => {
	res.json({Success: "Success!"})
})

app.get('/searchForSummoner/:summonerName', testRouter);
app.use('/champions', championsRouter);


app.listen(port, ()=>{
	console.log('Server is running on port: ${port}');
});