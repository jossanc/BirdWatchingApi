const { AchievementUser } = require('../AchievementUser');

AchievementUser.bulkCreate([
    {achievementName: 'Urbanita novato',
    challengeName: 'Ave de ciudad',
    userName: 'Jose'
},
    {achievementName: 'Campesino novato',
    challengeName: 'Ave rural',
    userName: 'Jose'
},
    {achievementName: 'Campesino novato',
    challengeName: 'Ave rural',
    userName: 'David'
},
    {achievementName: 'Montañero novato',
    challengeName: 'Ave de montaña',
    userName: 'Marga'
},
    {achievementName: 'Montañero novato',
    challengeName: 'Ave de montaña',
    userName: 'Jose'
},
    {achievementName: 'Novato',
    challengeName: 'Novato',
    userName: 'Jose'
},
    {achievementName: 'Urbanita novato',
    challengeName: 'Ave de ciudad',
    userName: 'Marga'
}
]).then(() => { }).catch(() => { });
