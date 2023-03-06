"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DB_DEPLOY } = process.env;
// export const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecomerce`,
//   {
//     host: DB_PORT,
//     dialect: "postgres",
//     native: false,
//     logging: false,
//   }
//);
exports.sequelize = new sequelize_1.Sequelize(DB_DEPLOY, {
    host: DB_PORT,
    dialect: "postgres",
    native: false,
    logging: false,
});
(function authenticate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log("Authenticate has been successful");
        }
        catch (error) {
            console.log("Authenticate has not been successful:");
        }
    });
})();
(function seqSync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.sync({ force: true }).then(() => {
                console.log("Postgres sync has been established successfully.");
            });
        }
        catch (error) {
            console.error("Unable to sync to the database:", error);
        }
    });
})();
