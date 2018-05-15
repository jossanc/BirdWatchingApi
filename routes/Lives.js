const express = require('express');
const Sequelize = require('sequelize');
const { Live } = require('../models/Models');

var router = express.Router();

router.get('/byArea/:id', (req, res) => {
    const areaName = req.params.id;
    Live.findAll({where:{areaName:areaName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

module.exports = {
    Live: router
}
