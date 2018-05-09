const { User } = require('../User');


User.bulkCreate([
    {
        username: 'Jose',
        password: 'pass123',
        area: 'Valladolid'
    },
    {
        username: 'Marga',
        password: 'pass123',
        area: 'Valladolid'
    }
]).then(() => { }).catch(() => { });
    