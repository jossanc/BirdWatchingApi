const express = require('express');
const Sequelize = require('sequelize');
const { Achievement } = require('../models/Models');

var router = express.Router();

router.get('/', (req, resp)=>{
    Achievement.findAll({}).then((Achievements)=>{
        resp.send(Achievements);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
})
router.get('/:userName', (req, res) => {
    //Gets the achievements of an user
    Achievement.findAll({attributes:['achievementName','challengeName'],
	 where: {userName: req.params.userName } })
        .then(Achievement => res.send(Achievement))
        .catch(error => res.sendStatus(500));
});
router.post('/', (req, res) => {
    //Creates a new achievement
    console.log(req);
    var data = {};
    data.achievementName = req.body.achievementName;
    data.userName = req.body.userName;
    data.challengeName = req.body.challenge;

    Achievement.create(data)
        .then((ok) => res.send(ok))
        .catch((err) => res.sendStatus(500));
});
module.exports = {
    Achievement: router
}
