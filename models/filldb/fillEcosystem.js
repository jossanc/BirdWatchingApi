const { Ecosystem } = require('../Ecosystem');

Ecosystem.bulkCreate([
    {ecosystemName: 'Zona urbana'},
    {ecosystemName: 'Zona arbolada'},
    {ecosystemName: 'Zona semiarbolada'},
    {ecosystemName: 'Zona de pradera'},
    {ecosystemName: 'Zona boscosa'},
    {ecosystemName: 'Zona de montaña'},
    {ecosystemName: 'Zona rural'},
    {ecosystemName: 'Brezales'},
    {ecosystemName: 'Zona de humedales'}
]).then(() => { }).catch(() => { });
