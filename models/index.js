const User = require('./user');
const Games = require('./games');

User.hasMany(Games, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Games.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Games };
