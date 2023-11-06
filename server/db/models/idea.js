'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Idea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  Idea.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    img: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Idea',
  });
  return Idea;
};