const { User } = require('../User');


User.bulkCreate([
    {
        username: 'jose',
        password: 'pass123',
        area: 'Valladolid'
    },
    {
        username: 'marga',
        password: 'pass123',
        area: 'Valladolid'
    },
]).then(() => { }).catch(() => { });
