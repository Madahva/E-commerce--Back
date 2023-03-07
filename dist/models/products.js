"use strict";
// import { Model, DataTypes, Sequelize } from "sequelize";
//// import { AllowNull } from "sequelize-typescript";
// import { sequelize } from "../db"; // Importa la instancia de Sequelize
// import Category from "./category";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// class Products extends Model {
//   public id!: string;
//   public name!: string;
//   public quantity?: number;
//   public description?: string;
//   public img!: string;
//   public price!: number;
//   public deleted?: boolean;
//   public rating!: number;
//   public Marca! : string;
//   public category_id! : number;
// }
// ;
// Products.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//     },
//     img: {
//       type: DataTypes.STRING,
//       defaultValue:
//         "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/521-bust-in-silhouette-coloring-page.png",
//     },
//     price: {
//       type: DataTypes.DECIMAL(6, 2), // hasta un maximo de 9999.99
//       allowNull: false,
//     },
//     deleted: {
//       //borrado logico
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     rating: {
//       type: DataTypes.DECIMAL(3, 2),
//       defaultValue: 5.0,
//     },
//     category_id: { // definimos la columna category_id
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: { // establecemos la relación con la tabla Category
//         model: Category,
//         key: 'id'
//       }
//     },
//     Marca :{
//       type: DataTypes.STRING,
//       allowNull: true ,
//     },
//   },
//   {
//     sequelize ,
//     tableName: "products", // nombre de la tabla en la base de datos
//   }
// );
// // Category.hasMany(Products);
// // Products.belongsTo(Category);
// //  Products.belongsTo(Category);
// export default Products;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const category_1 = __importDefault(require("../models/category"));
class Product extends sequelize_1.Model {
    // Define la relación con Category
    static associate() {
        Product.belongsTo(category_1.default, { foreignKey: "category_id", as: "Category" });
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
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
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
exports.default = Product;
