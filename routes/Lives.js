const express = require('express');
const Sequelize = require('sequelize');
const { Live, sequelize } = require('../models/Models');

var router = express.Router();

router.get('/findbybird/:id', (req, res) => {
    const birdName = req.params.id;
    Live.findAll({attributes:['areaName'],
    where:{commonName:birdName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});
router.get('/findbyarea/:id', (req, res) => {
    const areaName = req.params.id;
    Live.findAll({attributes:['commonName'],
    where:{areaName:areaName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

router.get('/findbyarea2/:id', (req, res) => {
    const area = req.params.id;
    sequelize.query("SELECT commonName,scientificName,family,ecosystemName from birds where commonName IN (SELECT commonName FROM lives WHERE areaName=:areaN)",
    { replacements: { areaN: area  },
     type: sequelize.QueryTypes.SELECT })
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

module.exports = {
    Live: router
}
