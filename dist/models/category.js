"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db"); // Importa la instancia de Sequelize
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    typecategory: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "Category",
    createdAt: false,
    updatedAt: false,
});
// Category.hasMany(Product, { foreignKey: "category_id" });
// Product.belongsTo(Category, { foreignKey: "category_id" });
exports.default = Category;
