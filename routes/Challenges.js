const express = require('express');
const Sequelize = require('sequelize');
const { Challenge } = require('../models/Models');

var router = express.Router();

router.get('/', (req, resp)=>{
    Challenge.findAll({}).then((challenges)=>{
        resp.send(challenges);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
})
router.get('/:id', (req, res) => {
    //Gets a challenge
    Challenge.find({ where: { challengeName: req.params.id } })
        .then(challenge => res.send(challenge))
        .catch(error => res.sendStatus(500));
});


module.exports = {
    Challenge: router
}