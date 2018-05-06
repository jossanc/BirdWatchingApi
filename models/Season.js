const { database } = require('./Sequelize');
const Sequelize = require('sequelize');

const Season = database.define('seasons', {
    seasonName:{ type: Sequelize.STRING,primaryKey:true}
}, { createdAt: false, updatedAt: false });


module.exports={
    Season
}