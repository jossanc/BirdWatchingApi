const { database } = require('./Sequelize');
const Sequelize = require('sequelize');

const Area = database.define('areas', {
    areaName:{ type: Sequelize.STRING(40),primaryKey:true}
}, { createdAt: false, updatedAt: false });


module.exports={
    Area
}