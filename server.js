const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./routes/Users');
const { Bird } = requier('./routes/Birds');
const { Sighting } = require('./routes/Sightings');

const PORT = 8181;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hola', (request, response)=>{
    response.send("Hola mundo funciona");
});
app.use('/users',User);
app.use('/birds',Bird);
app.use('/sightings',Sighting);


//this after calling all the routes
app.listen((PORT), ()=>{
    console.log("Api server listening on port", PORT);
})

