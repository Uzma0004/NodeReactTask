//const dbConfig = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   port: 5534,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

const Sequelize = require("sequelize");
const sequelize = new Sequelize('testdb', 'postgres', 'password', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.note = require("./note")(sequelize, Sequelize);

module.exports = db;