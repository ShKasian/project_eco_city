'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryFactory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoryFactory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoryFactory',
  });
  return CategoryFactory;
};