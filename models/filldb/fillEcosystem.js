const { Ecosystem } = require('../Ecosystem');

Ecosystem.bulkCreate([
    {ecosystemName: 'Zona urbana'},
    {ecosystemName: 'Zona arbolada'},
    {ecosystemName: 'Zona semiarbolada'},
    {ecosystemName: 'Zona de pradera'},
    {ecosystemName: 'Zona acuática'}
]).then(() => { }).catch(() => { });
