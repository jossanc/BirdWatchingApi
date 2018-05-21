const { BirdSeason } = require('../BirdSeason');

BirdSeason.bulkCreate([
    {commonName:'Cotorra Argentina',
    seasonName:'Invierno'
},
    {commonName:'Cotorra Argentina',
    seasonName:'Verano'
},
    {commonName:'Cotorra Argentina',
    seasonName:'Otoño'
},
    {commonName:'Cotorra Argentina',
    seasonName:'Primavera'
},
    {commonName:'Lechuza Común',
    seasonName:'Otoño'
},
    {commonName:'Lechuza Común',
    seasonName:'Primavera'
},
    {commonName:'Lechuza Común',
    seasonName:'Verano'
},
    {commonName:'Lechuza Común',
    seasonName:'Invierno'
}
]).then(() => { }).catch(() => { });
