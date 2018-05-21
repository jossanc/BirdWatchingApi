const {Bird} = require('../Bird');

Bird.bulkCreate([
    {commonName:'Cotorra Argentina',
    scientificName: 'Myiopsitta monachus',
    family: 'Psittacidae',
    ecosystemName: 'Zona urbana'
},
    {commonName:'Lechuza Común',
    scientificName: 'Tyto alba',
    family: 'Tytonidae',
    ecosystemName: 'Zona semiarbolada'
},
]).then(() => { }).catch(() => { });
