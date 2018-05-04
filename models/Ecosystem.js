const { database } = require('./sequelize');
const Sequelize = require('sequelize');

const Ecosystem = database.define('ecosystems', {
    ecosystemName:{ type: Sequelize.STRING,primaryKey:true}
}, { createdAt: false, updatedAt: false });


module.exports={
    Ecosystem
}