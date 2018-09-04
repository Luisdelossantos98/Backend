"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../../dao/_index");
function allStudents(req, res) {
    return _index_1.StudentDao.allStudents()
        .then(students => res.status(200).send(students))
        .catch(err => res.boom.badRequest(err));
}
exports.allStudents = allStudents;
function searchStudent(req, res) {
}
exports.searchStudent = searchStudent;

//# sourceMappingURL=students.get.js.map
