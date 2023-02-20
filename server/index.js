"use strict";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const router = require("./dist/Routes/index.js").default;
const server = express();

function midylware(req, res, next) {
  return next();
}

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());
server.use("/", router);


const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);


module.exports = server;
