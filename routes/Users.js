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

/*
sequelize.query("SELECT * FROM users").then(myTableRows => {
  console.log(myTableRows)
})*/

router.get('/:username', function(req,res){
    
    User.findOne({where:{
        userName: req.params.username 
    }}).then((User)=>{
        delete User.password;
        res.send(User);
       
}).catch((err)=>{
  res.status(403).send({error:err.toString()});
})});

router.post('/', (req, res) => {
    //Creates a new user
    console.log(req);
    if (req.body.userName === undefined ||
        req.body.password === undefined ||
        req.body.areaName === undefined ) {
        res.sendStatus(412);
        return;
    }
    var data = {};
    data.userName = req.body.userName;
    data.password = req.body.password;
    data.areaName = req.body.areaName;

    User.create(data)
        .then((ok) => res.send(ok))
        .catch((err) => res.sendStatus(500));
});

module.exports = {
    User: router
}

