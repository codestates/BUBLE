'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buyHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buyHistory.init(
    {
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'buyHistory',
    }
  );
  return buyHistory;
};
