const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./routes/users');
const PORT = 8181;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hola', (request, response)=>{
    response.send("Hola mundo funciona");
});
app.use('/users',User);
app.listen((PORT), ()=>{
    console.log("Estoy escuchando en el puerto", PORT);
})

