const { database } = require('./models/Sequelize');
const models = require('./models/Models');

console.log("Procediendo a la creación de la base de datos");

console.log("Primero eliminamos la base de datos");

database.drop();

console.log("En 5 segundos se crearán las tablas en la base de datos");

setTimeout(()=>{
  database.sync();
  console.log("En 5 segundos se inicializarán las tablas con datos de ejemplo");
},5000);

/*setTimeout(()=>{
  const models = require('./models/filldb/fillModels');
  console.log("Instalación finalizada");
  console.log("Puede arrancar la aplicación");
},3000);*/
