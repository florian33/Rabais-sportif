'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Club.belongsToMany(models.User, { through: 'UserClubs', foreignKey: 'clubId', onDelete: 'CASCADE' });
    }
  }
  Club.init({
    Name: {type:DataTypes.STRING,
      allowNull: false,},
    Description: DataTypes.STRING,
    Street: DataTypes.STRING,
    City: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    Logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Club',
  });
 
  return Club;
};