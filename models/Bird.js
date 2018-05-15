const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const {Area} = require('./Area');
const {Ecosystem} = require('./Ecosystem');
const {Season} = require('./Season');

const Bird = database.define('birds', {
    commonName:{ type: Sequelize.STRING(40),primaryKey:true},
    scientificName:{type: Sequelize.STRING(40)},
    family:{type: Sequelize.STRING(40)}
}, { createdAt: false, updatedAt: false });
//area.belongsTo(areas, {foreignKey: 'areaName'});
//Bird.belongsTo(Area,{foreignKey: 'areaName', targetKey:'areaName'});
Bird.belongsTo(Ecosystem,{foreignKey:'ecosystemName',targetKey:'ecosystemName'});
//Bird.belongsTo(Season,{foreignKey:'seasonName', targetKey:'seasonName'});

module.exports={
    Bird
}
