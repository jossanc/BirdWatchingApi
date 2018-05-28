const { Season } = require('../Season');

Season.bulkCreate([
    {seasonName: 'Invierno'},
    {seasonName: 'Verano'},
    {seasonName: 'Primavera'},
    {seasonName: 'Otoño'}
]).then(() => { }).catch(() => { });
