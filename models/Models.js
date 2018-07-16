const { Area, sequelize } = require('./Area');
const { Challenge } = require('./Challenge');
const { Ecosystem } = require('./Ecosystem');
const { Season } = require('./Season');
const { User } = require('./User');
const { AchievementUser } = require('./AchievementUser');
const { Achievement } = require('./Achievement');
const { Bird } = require('./Bird');
const { Sighting } = require('./Sighting');
const { Live } = require('./Live');
const { BirdSeason } = require('./BirdSeason');

module.exports = {
  Area,
  Challenge,
  Ecosystem,
  Season,
  User,
  Achievement,
  AchievementUser,
  Bird,
  Sighting,
  Live,
  BirdSeason,
  sequelize
};
