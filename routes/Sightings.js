const express = require('express');
const Sequelize = require('sequelize');
const { Sighting } = require('../models/Models');

var router = express.Router();

router.get('/', (req, resp)=>{
    Sighting.findAll({}).then((sightings)=>{
        resp.send(sightings);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
})
router.get('/:id', (req, res) => {
    //Gets a sighting
    Sighting.find({ where: { sightingId: req.params.id } })
        .then(sighting => res.send(sighting))
        .catch(error => res.sendStatus(500));
});

router.get('/byUser/:id', (req, res) => {
    const userName = req.params.id;
    Sighting.findAll({where:{user:userName}})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

router.post('/', (req, res) => {
    //Creates a sighting
    console.log(req);
    if (req.body.userName === undefined ||
        req.body.commonName === undefined ||
        req.body.areaName === undefined ) {
        res.sendStatus(412);
        return;
    }
    var data = {};
    data.sightingDate = Sequelize.NOW;
    data.userName = req.body.userName;
    data.commonBirdName = req.body.commonName;
    data.areaName = req.body.areaName;

    Sighting.create(data)
        .then((ok) => res.send(ok))
        .catch((err) => res.sendStatus(500));
});


module.exports = {
    Sighting: router
}
