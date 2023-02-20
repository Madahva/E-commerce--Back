import { Model, DataTypes, } from "sequelize";
import { sequelize } from "../indexdb"; // Importa la instancia de Sequelize
import Products from "./products";
class Category extends Model {
  public id!: string;
  public categorypro!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    typecategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: "Category", // nombre de la tabla en la base de datos
  }
);
// Category.belongsToMany(Products, { through: 'ProductCategory' })

export default Category;