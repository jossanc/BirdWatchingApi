const express = require('express');
const Sequelize = require('sequelize');
const { Area } = require('../models/Models');

var router = express.Router();

router.get('/areasName', (req, resp)=>{
    Area.findAll({attributes:['areaName']}).then((areas)=>{
        resp.send(areas);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
});

module.exports = {
    Area: router
}
