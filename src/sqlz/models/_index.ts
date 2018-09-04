import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const config = require('../config/config.json')

// Import model specification from its own definition file.
import { LanguageInstance, LanguageAttributes } from './language'
import { AppUserInstance, AppUserAttributes } from './appuser'
import { StudentInstance, StudentAttributes } from './student';

interface DbConnection {
  Language: Sequelize.Model<LanguageInstance, LanguageAttributes>,
  AppUser: Sequelize.Model<AppUserInstance, AppUserAttributes>,
  Student: Sequelize.Model<StudentInstance, StudentAttributes>
}
let db = {}

const dbConfig = config[process.env.NODE_ENV]
//console.log(dbConfig);
/*
const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)
*/
const sequelize = new Sequelize('mainDB', null, null, {
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const basename = path.basename(module.filename)
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file))
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model['name']] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize

export default <DbConnection>db
