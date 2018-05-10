const { User } = require('../User');


User.bulkCreate([
    {
        userName: 'Jose',
        password: 'pass123',
        area: 'Valladolid'
    },
    {
        userName: 'Marga',
        password: 'pass123',
        area: 'Valladolid'
    }
]).then(() => { }).catch(() => { });
    
