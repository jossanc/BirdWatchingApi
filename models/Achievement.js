const { database } = require('./Sequelize');
const Sequelize = require('sequelize');

const Achievement = database.define('achievement', {
    achievementName:{ type: Sequelize.STRING(40),primaryKey:true}
}, { createdAt: false, updatedAt: false });


module.exports={
    Achievement
}
