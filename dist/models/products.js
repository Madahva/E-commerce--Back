"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const category_1 = __importDefault(require("../models/category"));
const Brand_1 = __importDefault(require("./Brand"));
class Product extends sequelize_1.Model {
    // Define la relación con Category
    static associate() {
        Product.belongsTo(category_1.default, { foreignKey: "category_id", as: "Category" });
        Product.belongsTo(Brand_1.default, { foreignKey: "brand", as: "Brand" });
    }
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    deleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    rating: {
        type: sequelize_1.DataTypes.DECIMAL(2, 1),
        allowNull: false,
        defaultValue: 0.0,
    },
    Marca: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Brand",
            key: "id",
        },
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Category",
            key: "id",
        },
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "products",
    timestamps: true,
    underscored: true,
    createdAt: false,
    updatedAt: false
});
category_1.default.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(category_1.default, { foreignKey: "category_id" });
Brand_1.default.hasMany(Product, { foreignKey: "Marca" });
Product.belongsTo(Brand_1.default, { foreignKey: "Marca" });
exports.default = Product;
