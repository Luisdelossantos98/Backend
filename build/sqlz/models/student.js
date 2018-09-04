'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
    Student.associate = function (models) {
    };
    return Student;
};

//# sourceMappingURL=student.js.map
