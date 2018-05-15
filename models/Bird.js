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
Bird.belongsTo(Ecosystem,{foreignKey:'ecosystemName',targetKey:'ecosystemName'});

module.exports={
    Bird
}
