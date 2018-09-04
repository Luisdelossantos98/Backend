import * as Sequelize from "sequelize";

'use strict';

export interface StudentAttributes {
  id?: string;
  FirstName: string,
  LastName: string,
  Email: string,
  PhoneNumber: string,
  TSIComplete: string,
  FAFSA: string,
  TAFSA: string,
  COLLEGE: string,
  Highschool: string,
  Major: string,
  ANum: string
}

export interface StudentInstance extends Sequelize.Instance<StudentAttributes> {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  FirstName: string,
  LastName: string,
  Email: string,
  PhoneNumber: string,
  TSIComplete: string,
  FAFSA: string,
  TAFSA: string,
  COLLEGE: string,
  Highschool: string,
  Major: string,
  ANum: string
}

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    TSIComplete: DataTypes.STRING,
    FAFSA: DataTypes.STRING,
    TAFSA: DataTypes.STRING,
    COLLEGE: DataTypes.STRING,
    Highschool: DataTypes.STRING,
    Major: DataTypes.STRING,
    ANum: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
