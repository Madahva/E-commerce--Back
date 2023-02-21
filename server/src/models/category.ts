import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db"; // Importa la instancia de Sequelize
import Products from "./products";
class Category extends Model {
  public id!: string;
  public category!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Category", // nombre de la tabla en la base de datos
  }
);

// Category.belongsToMany(Products,{ through: 'producscategory'})
export default Category;
