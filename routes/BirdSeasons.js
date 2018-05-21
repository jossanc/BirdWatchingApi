const express = require('express');
const Sequelize = require('sequelize');
const { BirdSeason } = require('../models/Models');

var router = express.Router();

router.get('/:id', (req, res) => {
    const seasonName = req.params.id;
    BirdSeason.findAll({where:{seasonName:seasonName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

module.exports = {
    BirdSeason: router
}
