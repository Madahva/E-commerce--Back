"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class Order extends sequelize_1.Model {
}
init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    products: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
}, {
    tableName: 'orders',
    sequelize: db_1.sequelize,
    timestamps: true,
});
exports.default = Order;
