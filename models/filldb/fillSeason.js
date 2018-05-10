const { Season } = require('../Season');

Season.bulkCreate([
    {seasonName: 'Todo el año'},
    {seasonName: 'Invierno'},
    {seasonName: 'Verano'},
    {seasonName: 'Primavera'},
    {seasonName: 'Otoño'}
]).then(() => { }).catch(() => { });