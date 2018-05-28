const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { Area } = require('./Area');

const User = database.define('users', {
    userName:{ type: Sequelize.STRING(20),primaryKey:true},
    password:{type:Sequelize.STRING(20)}
}, { createdAt: false, updatedAt: false });

User.belongsTo(Area,{foreignKey: 'areaName', targetKey:'areaName'});

module.exports={
	User
}
