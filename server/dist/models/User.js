"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    }, name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    deleted: {
        //borrado logico
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: false,
    sequelize: db_1.sequelize,
    tableName: "user",
});
exports.default = User;
