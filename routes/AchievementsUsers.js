const express = require('express');
const Sequelize = require('sequelize');
const { AchievementUser } = require('../models/Models');

var router = express.Router();

router.get('/', (req, resp)=>{
    AchievementUser.findAll({}).then((Achievements)=>{
        resp.send(Achievements);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
})
router.get('/:userName', (req, res) => {
    //Gets the achievements of an user
    AchievementUser.findAll({attributes:['achievementName','challengeName'],
	 where: {userName: req.params.userName } })
        .then(AchievementUser => res.send(AchievementUser))
        .catch(error => res.sendStatus(500));
});
router.post('/', (req, res) => {
    //Creates a new achievement
    console.log(req);
    var data = {};
    data.achievementName = req.body.achievementName;
    data.userName = req.body.userName;
    data.challengeName = req.body.challengeName;

    AchievementUser.create(data)
        .then((ok) => res.send(ok))
        .catch((err) => res.sendStatus(500));
});
module.exports = {
    AchievementUser: router
}
