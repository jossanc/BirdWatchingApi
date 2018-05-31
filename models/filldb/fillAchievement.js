const { Achievement } = require('../Achievement');

Achievement.bulkCreate([
{achievementName: 'Urbanita novato'},
{achievementName: 'Campesino novato'},
{achievementName: 'Novato'},
{achievementName: 'Amo del monte'},
{achievementName: 'Anfibio'},
{achievementName: 'Pastor'},
{achievementName: 'Cervatillo'},
{achievementName: 'Amante de las aves'},
{achievementName: 'Montañero novato'}
]).then(() => { }).catch((e) => {console.log(e) });
