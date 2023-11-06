'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CommentInitiative, { foreignKey: 'initiativeId' });
      this.hasMany(models.MemberInitiative, { foreignKey: 'initiativeId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Initiative.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      img: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Initiative',
    },
  );
  return Initiative;
};
