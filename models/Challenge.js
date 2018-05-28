const { database } = require('./Sequelize');
const Sequelize = require('sequelize');

const Challenge = database.define('challenges', {
    challengeName:{ type: Sequelize.STRING(40),primaryKey:true},
    description:{ type : Sequelize.STRING(100)}
}, { createdAt: false, updatedAt: false });


module.exports={
    Challenge
}
