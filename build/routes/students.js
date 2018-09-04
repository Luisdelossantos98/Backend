"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../endpoints/_index");
function routes(app) {
    app.get('/api/students', _index_1.StudentController.StudentGet.allStudents);
}
exports.routes = routes;

//# sourceMappingURL=students.js.map
