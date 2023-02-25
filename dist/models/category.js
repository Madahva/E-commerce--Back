"use strict";
// import { Model, DataTypes } from "sequelize";
// import { sequelize } from "../db"; // Importa la instancia de Sequelize
Object.defineProperty(exports, "__esModule", { value: true });
// class Category extends Model {
//   public id!: string;
//   public category!: string;
// }
// Category.init(
//   {
//     id: {
//       type: DataTypes.STRING,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement : true
//     },
//     typecategory: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize ,
//     tableName: "Category", // nombre de la tabla en la base de datos
//   }
// );
// // Category.belongsToMany(Products,{ through: 'producscategory'})
// export default Category;
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
    tableName: "Category", // nombre de la tabla en la base de datos
});
exports.default = Category;
