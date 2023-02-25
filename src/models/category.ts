import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db"; // Importa la instancia de Sequelize
import Products from "./products";

class Category extends Model {
  public id!: number;
  public typecategory!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    typecategory: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  },
  {
    sequelize,
    tableName: "Category", // nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt : false
  }
);

Category.hasMany(Products, { foreignKey: 'category_id' });
 Products.belongsTo(Category, { foreignKey: 'category_id' });

export default Category;
