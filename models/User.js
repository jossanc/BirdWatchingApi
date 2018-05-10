const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { Area } = require('./Area');

const User = database.define('users', {
    userName:{ type: Sequelize.STRING,primaryKey:true},
    password:{type:Sequelize.STRING}
   // area:{type:Sequelize.STRING}
    /*area: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model: Area,
               // This is the column name of the referenced model
          key: 'areaName'//,
               // This declares when to check the foreign key constraint. PostgreSQL only.
         // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }*/
}, { createdAt: false, updatedAt: false });

User.belongsTo(Area,{foreignKey: 'areaName', targetKey:'areaName'});
//User.belongsTo(Area);
module.exports={
	User
}
