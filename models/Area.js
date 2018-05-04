const { database } = require('./sequelize');
const Sequelize = require('sequelize');

const Area = database.define('areas', {
    areaName:{ type: Sequelize.STRING,primaryKey:true}
}, { createdAt: false, updatedAt: false });


module.exports={
    Area
}