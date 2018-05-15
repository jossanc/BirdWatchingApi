const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { Area } = require('./Area');
const { Bird } = require('./Bird');

const Live = database.define('lives', {
    liveId:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement: true}
}, { createdAt: false, updatedAt: false });
Live.belongsTo(Bird,{foreignKey: 'commonName', targetKey: 'commonName'});
Live.belongsTo(Area,{foreignKey: 'areaName', targetKey:'areaName'});

module.exports={
    Live
}
