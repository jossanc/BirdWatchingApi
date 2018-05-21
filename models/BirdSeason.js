const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { Season } = require('./Season');
const { Bird } = require('./Bird');

const BirdSeason = database.define('birdseasons', {
    birdSeasonId:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement: true}
}, { createdAt: false, updatedAt: false });
BirdSeason.belongsTo(Bird,{foreignKey: 'commonName', targetKey: 'commonName'});
BirdSeason.belongsTo(Season,{foreignKey: 'seasonName', targetKey:'seasonName'});

module.exports={
    BirdSeason
}
