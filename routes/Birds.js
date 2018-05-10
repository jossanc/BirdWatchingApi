const express = require('express');
const Sequelize = require('sequelize');
const { Bird } = require('../models/Models');

var router = express.Router();

router.get('/', (req, resp)=>{
    Bird.findAll({}).then((birds)=>{
        resp.send(birds);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
})
router.get('/:id', (req, res) => {
    //Gets a bird
    Bird.find({ where: { commonName: req.params.id } })
        .then(bird => res.send(bird))
        .catch(error => res.sendStatus(500));
});

router.get('/bySeason/:id', (req, res) => {
    const seasonName = req.params.id;
    Bird.findAll({where:{seasonName:seasonName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

router.get('/byArea/:id', (req, res) => {
    const areaName = req.params.id;
    Bird.findAll({where:{areaName:areaName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

module.exports = {
    Bird: router
}
