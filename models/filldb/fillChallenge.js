const { Challenge } = require('../Challenge');

Challenge.bulkCreate([
    {challengeName: 'Ave de ciudad',
    description: 'Encuentra un  ave de zona urbana'
},
    {challengeName: 'Ave de humedales',
    description: 'Encuentra un  ave de zona de humedales'
},
    {challengeName: 'Ave de pradera',
    description: 'Encuentra un  ave de pradera'
},
    {challengeName: 'Ave rural',
    description: 'Encuentra un ave de zona rural'
},
    {challengeName: 'Ave de montaña',
    description: 'Encuentra un ave de montaña'
},
    {challengeName: 'Ave de zona boscosa',
    description: 'Encuentra un ave de zona boscosa'
},
    {challengeName: 'Ave de brezales',
    description: 'Encuentra un ave que viva en brezales'
},
    {challengeName: 'Ver 10 aves',
    description: 'Encuentra diez aves'
},
    {challengeName: 'Novato',
    description: 'Encuentra tres aves'
}
]).then(() => { }).catch(() => { });
