const express = require('express');
const Sequelize = require('sequelize');
const { User } = require('../models/Models');


var router = express.Router();

router.get('/', (req, resp)=>{
    User.findAll({}).then((users)=>{
        resp.send(users);
    }).catch((e)=>{
        console.log(e);
        resp.sendStatus(500)}
    );
})

module.exports = {
    User: router
}

