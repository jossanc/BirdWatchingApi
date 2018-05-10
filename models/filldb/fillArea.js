const { Area } = require('../Area');

Area.bulkCreate([
{areaName: 'Valladolid'},
{areaName: 'León'},
{areaName: 'Palencia'},
{areaName: 'Burgos'},
{areaName: 'Zamora'},
{areaName: 'Soria'},
{areaName: 'Salamanca'},
{areaName: 'Ávila'},
{areaName: 'Segovia'}
]).then(() => { }).catch((e) => {console.log(e) });
