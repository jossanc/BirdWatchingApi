const express = require('express');
const Sequelize = require('sequelize');
const { Bird } = require('../models/Models');
const { BirdSeason } = require('../models/Models');
const { Live } = require('../models/Models');

var router = express.Router();

router.get('/birds', (req, resp)=>{
    Bird.findAll({}).then((birds)=>{
        resp.send(birds);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
});
router.get('/birdsbysn', (req, resp)=>{
    Bird.findAll({order:[['scientificName']]}).then((birds)=>{
        resp.send(birds);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
});
router.get('/birdsName', (req, resp)=>{
    Bird.findAll({attributes:['commonName']}).then((birds)=>{
        resp.send(birds);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
});
/*
router.get('/:id', (req, res) => {
    //Gets a bird
    Bird.find({ where: { commonName: req.params.id } })
        .then(bird => res.send(bird))
        .catch(error => res.sendStatus(500));
});
*/

module.exports = {
    Bird: router
}
