const { Sighting } = require('../Sighting');

Sighting.bulkCreate([
    {userName:'Jose',
    commonBirdName: 'Cotorra argentina',
    areaName: 'Zamora'
},
    {userName:'David',
    commonBirdName: 'Faisán vulgar',
    areaName: 'León'
},
    {userName:'David',
    commonBirdName: 'Cigüeña blanca',
    areaName: 'León'
},
    {userName:'Jose',
    commonBirdName: 'Acentor común',
    areaName: 'Segovia'
},
    {userName:'Jose',
    commonBirdName: 'Cuervo grande',
    areaName: 'Valladolid'
},
    {userName:'Jose',
    commonBirdName: 'Cigüeña blanca',
    areaName: 'Soria'
},
    {userName:'Marga',
    commonBirdName: 'Acentor común',
    areaName: 'Ávila'
},
    {userName:'Marga',
    commonBirdName: 'Cotorra argentina',
    areaName: 'León'
},
    {userName:'Jose',
    commonBirdName: 'Lechuza común',
    areaName: 'Valladolid'
}
]).then(() => { }).catch(() => { });
