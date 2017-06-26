// requires 'pg' module
// requires migrations directory

// should / how can we use process.env properly, without using dotenv twice?
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  url: process.env.DATABASE_URI,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
};
