const express = require('express');
const Sequelize = require('sequelize');
const { BirdSeason } = require('../models/Models');

var router = express.Router();

router.get('/bybird/:id', (req, res) => {
    const birdName = req.params.id;
    BirdSeason.findAll({attributes:['seasonName'],
    where:{commonName:birdName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});
/*
router.get('/byseason/:id',(req,res) => {
    const seasonN = req.params.id;
    sequelize.query("SELECT * from birds WHERE commonName IN'+
    ' ( SELECT commonName FROM birdseasons WHERE seasonName=:season)",+
    ' {replacements: {season: seasonN}}
    )
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});
*/
module.exports = {
    BirdSeason: router
}
