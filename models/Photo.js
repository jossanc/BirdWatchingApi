const { database } = require('./Sequelize');
const Sequelize = require('sequelize');
const { Bird } = require('./Bird');

const Photo = database.define('photos', {
    photoId:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement: true},
    data:{ type: Sequelize.BLOB}
}, { createdAt: false, updatedAt: false });
Photo.belongsTo(Bird,{foreignKey: 'commonName', targetKey:'commonName'});

module.exports={
    Photo
}
