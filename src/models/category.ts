import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db"; // Importa la instancia de Sequelize
import Product from "./products";

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
    updatedAt: false,
  }
);

// Category.hasMany(Product, { foreignKey: "category_id" });
// Product.belongsTo(Category, { foreignKey: "category_id" });

export default Category;
