const {Bird} = require('../Bird');

Bird.bulkCreate([
    {commonName:'Abejero europeo',
    scientificName: 'Pernis apivorus',
    family: 'Accipitridae',
    ecosystemName: 'Zona boscosa'
},
    {commonName:'Acentor común',
    scientificName: 'Prunella modularis',
    family: 'Prunellidae',
    ecosystemName: 'Zona de montaña'
},
    {commonName:'Aguilucho pálido',
    scientificName: 'Circus cyaneus',
    family: 'Accipitridae',
    ecosystemName: 'Brezales'
},
    {commonName:'Cigüeña blanca',
    scientificName: 'Ciconia ciconia',
    family: 'Ciconiidae',
    ecosystemName: 'Zona rural'
},
    {commonName:'Cotorra argentina',
    scientificName: 'Myiopsitta monachus',
    family: 'Psittacidae',
    ecosystemName: 'Zona urbana'
},
    {commonName:'Cuervo grande',
    scientificName: 'Corvus Corax',
    family: 'Corvidae',
    ecosystemName: 'Zona rural'
},
    {commonName:'Faisán vulgar',
    scientificName: 'Phasianus colchicus',
    family: 'Phasianidae',
    ecosystemName: 'Zona rural'
},
    {commonName:'Lechuza común',
    scientificName: 'Tyto alba',
    family: 'Tytonidae',
    ecosystemName: 'Zona semiarbolada'
},
    {commonName:'Martinete común',
    scientificName: 'Nycticorax nycticorax',
    family: 'Ardeidae',
    ecosystemName: 'Zona de humedales'
},
]).then(() => { }).catch(() => { });
