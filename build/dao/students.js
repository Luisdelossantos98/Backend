"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../sqlz/models/_index");
function allStudents() {
    return _index_1.default.Student.findAll();
}
exports.allStudents = allStudents;

//# sourceMappingURL=students.js.map
