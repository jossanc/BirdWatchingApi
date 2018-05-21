const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { User } = require('./User');
const { Challenge } = require('./Challenge');

const Achievement = database.define('achievements', {
    achievementId:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement: true},
    achievementName:{ type: Sequelize.STRING(40)}
/*user: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model: User,
               // This is the column name of the referenced model
          key: 'userName',
               // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    challenge: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model: Challenge,
               // This is the column name of the referenced model
          key: 'challengeName',
               // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }*/
}, { createdAt: false, updatedAt: false });
Achievement.belongsTo(User,{foreignKey: 'userName', targetKey:'userName'});
Achievement.belongsTo(Challenge,{foreignKey: 'challengeName', targetKey: 'challengeName'});

module.exports={
    Achievement
}
