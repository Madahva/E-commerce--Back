const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./src/Routes/index");
const sequelize = require("./indexdb.js");

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());
server.use(routes);

(async function seqSync() {
  try {
    sequelize.sync({ force: false }).then(() => {
      console.log("Postgres sync has been established successfully.");
    });
  } catch (error) {
    console.error("Unable to sync to the database:", error);
  }
})();

module.exports = server;
