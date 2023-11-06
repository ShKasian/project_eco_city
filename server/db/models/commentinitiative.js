'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentInitiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Initiative, { foreignKey: 'initiativeId' });
    }
  }
  CommentInitiative.init(
    {
      name: DataTypes.TEXT,
      body: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      initiativeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CommentInitiative',
    },
  );
  return CommentInitiative;
};
