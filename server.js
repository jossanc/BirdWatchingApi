const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./routes/Users');
const { Bird } = require('./routes/Birds');
const { BirdSeason } = require('./routes/BirdSeasons');
const { Live } = require('./routes/Lives');
const { Sighting } = require('./routes/Sightings');
const { Photo } = require('./routes/Photos');

const PORT = 8181;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hola', (request, response)=>{
    response.send("Hola mundo funciona");
});
app.use('/users',User);
app.use('/birds',Bird);
app.use('/bySeason',BirdSeason);
app.use('/byArea',Live);
app.use('/sightings',Sighting);
app.use('/photos',Photo);


//this after calling all the routes
app.listen((PORT), ()=>{
    console.log("Api server listening on port", PORT);
})

