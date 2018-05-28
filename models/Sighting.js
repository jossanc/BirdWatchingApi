const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { User } = require('./User');
const { Bird } = require('./Bird');
const { Area } = require('./Area');

const Sighting = database.define('sightings', {
    sightingId:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement: true},
    sightingDate:{type:Sequelize.DATE, defaultValue:Sequelize.NOW}
}, { createdAt: false, updatedAt: false });
Sighting.belongsTo(User,{foreignKey:'userName', targetKey:'userName'});
Sighting.belongsTo(Bird,{foreignKey:'commonBirdName', targetKey:'commonName'});
Sighting.belongsTo(Area,{foreignKey: 'areaName', targetKey:'areaName'});


module.exports={
	Sighting
}
