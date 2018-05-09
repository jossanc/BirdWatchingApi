const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const Area = require('./Area');
const Ecosystem = require('./Ecosystem');
const Season = require('./Season');

const Bird = database.define('birds', {
    commonName:{ type: Sequelize.STRING,primaryKey:true},
    scientificName:{type: Sequelize.STRING(40)},
    family:{type: Sequelize.STRING(40)},
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
    },ecosystem: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model: Ecosystem,
               // This is the column name of the referenced model
          key: 'ecosystemName',
               // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },season: {
        type: Sequelize.STRING,
             references: {
          // This is a reference to another model
          model: Season,
               // This is the column name of the referenced model
          key: 'seasonName'//,
               // This declares when to check the foreign key constraint. PostgreSQL only.
         // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
  //  ecosystem:{type: Sequelize.STRING}
}, { createdAt: false, updatedAt: false });
//area.belongsTo(areas, {foreignKey: 'areaName'});

module.exports={
    Bird
}
