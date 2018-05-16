const express = require('express');
const Sequelize = require('sequelize');
const { Photo } = require('../models/Models');

var router = express.Router();

router.get('/:commonName', (req, res) => {
    //Gets the Photos of a bird
    Photo.find({ where: {commonName: req.params.commonName } })
        .then(Photo => res.send(Photo))
        .catch(error => res.sendStatus(500));
});

router.get('/Cotorra.jpg', function(req,res){
 //   if(req.userName){
        res.sendFile('/home/tfg/node/BirdWatchingApi/routes/cotorra-argentina-1.jpg');
   // } else {
     //   res.status(401).send('Authorization required!');
    //}
});

module.exports = {
    Photo
}
