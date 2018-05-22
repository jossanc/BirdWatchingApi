const { Sighting } = require('../Sighting');

Sighting.bulkCreate([
    {userName:'Jose',
    commonBirdName: 'Cotorra Argentina',
    areaName: 'Valladolid'
}
]).then(() => { }).catch(() => { });
