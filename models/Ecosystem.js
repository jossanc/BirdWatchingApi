const { database } = require('./Sequelize');
const Sequelize = require('sequelize');

const Ecosystem = database.define('ecosystems', {
    ecosystemName:{ type: Sequelize.STRING(40),primaryKey:true}
    },{ createdAt: false, updatedAt: false }
);


module.exports={
    Ecosystem
}

