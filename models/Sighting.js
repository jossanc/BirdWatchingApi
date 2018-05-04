const { database } = require('./sequelize');
const Sequelize = require('sequelize');

const Sighting = database.define('sightings', {
    userName:{ type: Sequelize.STRING,primaryKey:true},
    password:{type:Sequelize.STRING},
    area:{type:Sequelize.STRING}
}, { createdAt: false, updatedAt: false });


module.exports={
	User
}
