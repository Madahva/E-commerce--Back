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
}, {
    timestamps: false,
    sequelize: db_1.sequelize,
    tableName: "user",
    createdAt: false,
    updatedAt: false
});
// Product.hasMany(User, { foreignKey: 'user_id' });
//  User.belongsTo(Product, { foreignKey: 'user_id' });
exports.default = User;
