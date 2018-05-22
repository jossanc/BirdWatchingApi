const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./routes/Users');
const { Bird } = require('./routes/Birds');
const { BirdSeason } = require('./routes/BirdSeasons');
const { Live } = require('./routes/Lives');
const { Sighting } = require('./routes/Sightings');
const { Photo } = require('./routes/Photos');
const { Area } = require('./routes/Areas');
const { Challenge } = require('./routes/Challenges');
const { Achievement } = require('./routes/Achievements');

const PORT = 8181;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users',User);
app.use('/birds',Bird);
app.use('/bySeason',BirdSeason);
app.use('/byArea',Live);
app.use('/sightings',Sighting);
app.use('/photos',Photo);
app.use('/areas',Area);
app.use('/challenges',Challenge);
app.use('/achievements',Achievement);
/*
app.get('/Cotorra.jpg', function(req,res){
 //   if(req.userName){
        res.sendFile('/home/tfg/node/BirdWatchingApi/routes/cotorra-argentina-1.jpg');
   // } else {
     //   res.status(401).send('Authorization required!');
    //}
});*/

//this after calling all the routes
app.listen((PORT), ()=>{
    console.log("Api server listening on port", PORT);
})

