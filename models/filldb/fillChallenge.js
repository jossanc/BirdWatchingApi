const { Challenge } = require('../Challenge');

Challenge.bulkCreate([
    {challengeName: 'Urbanita',
    description: 'Encuentra tres aves de zona urbana'
}
]).then(() => { }).catch(() => { });