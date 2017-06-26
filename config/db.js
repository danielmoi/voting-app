// requires 'pg' module
// requires migrations directory
// access process.env through dotenv

module.exports = {
  url: process.env.DATABASE_URI,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
};
