const { Achievement } = require('../Achievement');

Achievement.bulkCreate([
{achievementName: 'Urbanita novato'},
{achievementName: 'Campesino novato'},
{achievementName: 'Novato'},
{achievementName: 'Montañero novato'}
]).then(() => { }).catch((e) => {console.log(e) });
