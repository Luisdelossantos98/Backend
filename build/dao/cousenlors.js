"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _index_1 = require("../sqlz/models/_index");
function allCounselors() {
    return _index_1.default.Student.findAll();
}
exports.allCounselors = allCounselors;

//# sourceMappingURL=counselors.js.map
