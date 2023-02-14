const { Sequelize } = require("sequelize");
const { config } = require("dotenv");

config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecomerce`,
  {
    dialect: "postgres",
    native: false,
    logging: false,
  }
);

module.exports = sequelize;
