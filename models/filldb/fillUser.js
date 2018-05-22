const { User } = require('../User');


User.bulkCreate([
    {
        userName: 'jose',
        password: 'jose',
        areaName: 'Valladolid'
    },
    {
        userName: 'Marga',
        password: 'pass123',
        areaName: 'Valladolid'
    }
]).then(() => { }).catch(() => { });
    
