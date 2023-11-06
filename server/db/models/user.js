'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Initiative, { foreignKey: 'userId' });
      this.hasMany(models.CommentInitiative, { foreignKey: 'userId' });
      this.hasMany(models.MemberInitiative, { foreignKey: 'userId' });
      this.hasMany(models.Idea, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
