const { database } = require('./Sequelize');
const Sequelize = require('sequelize');

const Season = database.define('seasons', {
    seasonName:{ type: Sequelize.STRING(40),primaryKey:true}
}, { createdAt: false, updatedAt: false });


module.exports={
    Season
}
