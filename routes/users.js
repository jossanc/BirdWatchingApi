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

router.get('/:username', function(req,res){
    
    models.User.findOne({where:{
        userName: req.params.username 
    }}).then((User)=>{
        delete User.password;
        res.send(User);
      
}).catch((err)=>{
  res.status(403).send({error:err.toString()});
})});

module.exports = {
    User: router
}

