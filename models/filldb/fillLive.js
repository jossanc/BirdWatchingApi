const { Live } = require('../Live');

Live.bulkCreate([
    {commonName:'Cotorra Argentina',
     areaName:'Zamora'
},
    {commonName:'Cotorra Argentina',
     areaName:'León'
},
    {commonName:'Lechuza Común',
     areaName:'León'
},
    {commonName:'Lechuza Común',
     areaName:'Palencia'
},
    {commonName:'Lechuza Común',
     areaName:'Burgos'
},
    {commonName:'Lechuza Común',
     areaName:'Soria'
},
    {commonName:'Lechuza Común',
     areaName:'Zamora'
},
    {commonName:'Lechuza Común',
     areaName:'Valladolid'
},
    {commonName:'Lechuza Común',
     areaName:'Segovia'
},
    {commonName:'Lechuza Común',
     areaName:'Ávila'
},
    {commonName:'Lechuza Común',
     areaName:'Salamanca'
}
]).then(() => { }).catch(() => { });
