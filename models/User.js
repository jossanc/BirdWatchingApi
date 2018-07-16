const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { Area } = require('./Area');

const User = database.define('users', {
    userName:{ type: Sequelize.STRING(15),primaryKey:true},
    password:{type:Sequelize.STRING(15)}
}, { createdAt: false, updatedAt: false });

User.belongsTo(Area,{foreignKey: 'areaName', targetKey:'areaName'});

module.exports={
	User
}
