"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const LanguagesRoutes = require("./languages");
const AppUserRoutes = require("./appusers");
function initRoutes(app) {
    winston.log('info', '--> Initialisations des routes');
    app.get('/api', (req, res) => res.status(200).send({
        message: 'server is running!'
    }));
    LanguagesRoutes.routes(app);
    AppUserRoutes.routes(app);
    app.all('*', (req, res) => res.status(200).send({
        message: 'server is running!'
    }));
}
exports.initRoutes = initRoutes;

//# sourceMappingURL=_index.js.map
