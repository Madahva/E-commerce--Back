"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import { AllowNull } from "sequelize-typescript";
const db_1 = require("../db"); // Importa la instancia de Sequelize
const category_1 = __importDefault(require("./category"));
class Products extends sequelize_1.Model {
}
;
Products.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
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
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/521-bust-in-silhouette-coloring-page.png",
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(6, 2),
        allowNull: false,
    },
    deleted: {
        //borrado logico
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    rating: {
        type: sequelize_1.DataTypes.DECIMAL(3, 2),
        defaultValue: 5.0,
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        // references: { // establecemos la relación con la tabla Category
        //   model: Category,
        //   key: 'id'
        // }
    },
    Marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "products", // nombre de la tabla en la base de datos
});
category_1.default.hasMany(Products);
Products.belongsTo(category_1.default);
//  Products.belongsTo(Category);
exports.default = Products;
