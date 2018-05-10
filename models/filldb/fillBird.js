const {Bird} = require('../Bird');

Bird.bulkCreate([
    {commonName:'Cotorra Argentina',
    scientificName: 'Myiopsitta monachus',
    family: 'Psittacidae',
    areaName: 'Zamora',
    ecosystemName: 'Zona urbana',
    seasonName: 'Todo el año'
}
]).then(() => { }).catch(() => { });
