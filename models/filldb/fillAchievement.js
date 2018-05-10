const { Achievement } = require('../Achievement');

Achievement.bulkCreate([
    {achievementName: 'Urbanita novato',
    challengeName: 'Urbanita',
    userName: 'Jose'
}
]).then(() => { }).catch(() => { });
