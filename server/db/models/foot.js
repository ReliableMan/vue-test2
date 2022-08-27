'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foot extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Foot.init({
    description_block: DataTypes.STRING,
    description_block_detail: DataTypes.STRING,
    description_block_abbreviated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Foot',
  });
  return Foot;
};
