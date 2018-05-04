const { database } = require('./sequelize');
const Sequelize = require('sequelize');

const Bird = database.define('birds', {
    commonName:{ type: Sequelize.STRING,primaryKey:true},
    scientificName:{type: Sequelize.STRING},
    family:{type: Sequelize.STRING},
    area:{type: Sequelize.STRING},
    ecosystem:{type: Sequelize.STRING}
}, { createdAt: false, updatedAt: false });


module.exports={
    Bird
}