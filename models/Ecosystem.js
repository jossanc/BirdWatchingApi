const { database } = require('./sequelize');
const Sequelize = require('sequelize');

const Ecosystem = database.define('ecosystems', {
    ecosystemName:{ type: Sequelize.STRING,primaryKey:true}
},{
    classMethods:{
        associate(models){
            ecosystem.belongsTo(models.Bird, {foreignKey: 'ecosystem'})
        }
    }
    },
     { createdAt: false, updatedAt: false }
);


module.exports={
    Ecosystem
}