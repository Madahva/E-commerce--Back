const { Sequelize } = require("sequelize");
const { config } = require("dotenv");
const user = require("./src/models/User.js");
const products = require("./src/models/products.js");

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
user(sequelize);
products(sequelize);
console.log(sequelize.models, "MODELOS");
module.exports = { sequelize, ...sequelize.models };
