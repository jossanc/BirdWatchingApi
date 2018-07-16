const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./routes/Users');
const { Bird } = require('./routes/Birds');
const { BirdSeason } = require('./routes/BirdSeasons');
const { Live } = require('./routes/Lives');
const { Sighting } = require('./routes/Sightings');
const { Area } = require('./routes/Areas');
const { Challenge } = require('./routes/Challenges');
const { AchievementUser } = require('./routes/AchievementsUsers');

const PORT = 8181;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users',User);
app.use('/birds',Bird);
app.use('/seasons',BirdSeason);
app.use('/lives',Live);
app.use('/sightings',Sighting);
app.use('/areas',Area);
app.use('/challenges',Challenge);
app.use('/achievements',AchievementUser);
app.use('/images', express.static('/home/tfg/pictures'));

//this after calling all the routes
app.listen((PORT), ()=>{
    console.log("Api server listening on port", PORT);
})

