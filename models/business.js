'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Business.hasMany(models.Transaction, { foreignKey: 'businessId', onDelete: 'CASCADE' });
    }
  }
  Business.init({
    Name: DataTypes.STRING,
    Street: DataTypes.STRING,
    City: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    Logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Business',
  });

 

  return Business;
};