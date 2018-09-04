'use strict';
module.exports = (sequelize, DataTypes) => {
  var counselors = sequelize.define('counselors', {
    FisrtName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  counselors.associate = function(models) {
    // associations can be defined here
  };
  return counselors;
};
