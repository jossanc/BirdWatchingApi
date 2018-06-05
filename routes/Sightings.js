const express = require('express');
const Sequelize = require('sequelize');
const { Sighting, sequelize } = require('../models/Models');

var router = express.Router();

router.get('/', (req, resp)=>{
    Sighting.findAll({
    order:[['sightingDate','DESC']]})
    .then((sightings)=>{
        resp.send(sightings);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
})/*
router.get('/:id', (req, res) => {
    //Gets the sightings of an user
    Sighting.find({ where: { userName: req.params.id } })
        .then(sighting => res.send(sighting))
        .catch(error => res.sendStatus(500));
});*/

// envia los avistamientos de un usuario
router.get('/byuser/:user', (req, res) => {
    const userName = req.params.user;
    Sighting.findAll({where:{userName:userName},
    order:[['sightingDate','DESC']]})
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

router.get('/byuser/count/:user', (req, res) => {
    const userName = req.params.user;
    Sighting.findAll({ 
    attributes: [[sequelize.fn('COUNT', sequelize.col('sightingId')), 'count']],
    where:{userName:userName}}) 
    .then(data=>res.send(data))
    .catch(()=>res.sendStatus(500));
});

router.post('/', (req, res) => {
    //Creates a sighting
    console.log(req);
 /*   if (req.body.userName === undefined ||
        req.body.commonName === undefined ||
        req.body.areaName === undefined ) {
        res.sendStatus(412);
        return;
    }*/
    var data = {};
//    data.sightingDate = Sequelize.NOW;
    data.userName = req.body.userName;
    data.commonBirdName = req.body.commonBirdName;
    data.areaName = req.body.areaName;

    Sighting.create(data)
        .then((ok) => res.send(ok))
        .catch((err) => res.sendStatus(500));
});

router.put('/update/:id',function(req,res){
    const id = req.params.id;
    Sighting.findOne({where:{sightingId:id}})
    .then((Sighting)=>{
        Sighting.update({
            commonBirdName:req.body.commonBirdName,
            areaName:req.body.areaName
        })
    }).catch(()=>res.sendStatus(500));
});

router.delete('/:id', function(req,res){
        const id=req.params.id;
        Sighting.destroy({where:{sightingId:id}})
        .then((ok)=>res.status(200).send()) 
        .catch((err)=>{
      res.status(403).send({error:err.toString()});
  })
});


module.exports = {
    Sighting: router
}
