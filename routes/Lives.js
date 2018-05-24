const express = require('express');
const Sequelize = require('sequelize');
const { Live } = require('../models/Models');

var router = express.Router();

router.get('/:id', (req, res) => {
    const birdName = req.params.id;
    Live.findAll({attributes:['areaName'],
    where:{commonName:birdName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

module.exports = {
    Live: router
}
