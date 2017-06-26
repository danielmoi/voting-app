const env = process.env.NODE_ENV || 'development';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const db = {};

const sequelize  = new Sequelize(
  process.env.DATABASE_URI, {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    port: process.env.DATABASE_PORT,
  });

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
