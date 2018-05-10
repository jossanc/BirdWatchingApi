const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { User } = require('./User');
const { Bird } = require('./Bird');
const { Area } = require('./Area');

const Sighting = database.define('sightings', {
    sightingId:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement: true},
    sightingDate:{type:Sequelize.DATE, defaultValue:Sequelize.NOW}
    /*user: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model:User,
               // This is the column name of the referenced model
          key: 'userName',
               // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    commonBirdName: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model: Bird,
               // This is the column name of the referenced model
          key: 'commonName',
               // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    area: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model: Area,
               // This is the column name of the referenced model
          key: 'areaName',
               // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }*/
}, { createdAt: false, updatedAt: false });
Sighting.belongsTo(User,{foreignKey:'userName', targetKey:'userName'});
Sighting.belongsTo(Bird,{foreignKey:'commonBirdName', targetKey:'commonName'});
Sighting.belongsTo(Area,{foreignKey: 'areaName', targetKey:'areaName'});


module.exports={
	Sighting
}
