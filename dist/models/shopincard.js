"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const User_1 = __importDefault(require("./User"));
class Shopincard extends sequelize_1.Model {
    // Define la relación con Category
    static associate() {
        Shopincard.belongsTo(User_1.default, { foreignKey: "category_id", as: "User" });
    }
}
Shopincard.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: "User",
            key: "id",
        },
    },
    products: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: db_1.sequelize,
    tableName: "Shopincard",
    createdAt: false,
    updatedAt: false
});
exports.default = Shopincard;
