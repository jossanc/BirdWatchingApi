const { database } = require('./sequelize');
const Sequelize = require('sequelize');

const User = database.define('users', {
    userName:{ type: Sequelize.STRING,primaryKey:true},
    password:{type:Sequelize.STRING},
    area:{type:Sequelize.STRING}
}, { createdAt: false, updatedAt: false });


/*
sequelize.query("SELECT * FROM users").then(myTableRows => {
  console.log(myTableRows)
})*/

module.exports={
	User
}
