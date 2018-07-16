const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { User } = require('./User');
const { Challenge } = require('./Challenge');
const { Achievement } = require('./Achievement');

const AchievementUser = database.define('achievementusers', {
    achievementName:{ type: Sequelize.STRING(40),primaryKey:true},
   userName:{ type: Sequelize.STRING(40),primaryKey:true}
}, { createdAt: false, updatedAt: false });
AchievementUser.belongsTo(Challenge,{foreignKey: 'challengeName', targetKey: 'challengeName'});

module.exports={
    AchievementUser
}
