import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db"; // Importa la instancia de Sequelize

class Category extends Model {
  public id!: string;
  public typecategory!: string;
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
    sequelize,
    tableName: "Category", // nombre de la tabla en la base de datos
  }
);

export default Category;
