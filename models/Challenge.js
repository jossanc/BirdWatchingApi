const { database } = require('./Sequelize');
const Sequelize = require('sequelize');

const Challenge = database.define('challenges', {
    challengeName:{ type: Sequelize.STRING,primaryKey:true},
    description:{ type : Sequelize.STRING}
}, { createdAt: false, updatedAt: false });


module.exports={
    Challenge
}