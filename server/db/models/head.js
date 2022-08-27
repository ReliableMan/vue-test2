'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Head extends Model {
 
    static associate(models) {
      // define association here
    }
  }
  Head.init({
    description_block: DataTypes.STRING,
    description_block_detail: DataTypes.STRING,
    description_block_abbreviated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Head',
  });
  return Head;
};
