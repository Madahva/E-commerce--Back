import { Model, DataTypes, Association } from "sequelize";
import { sequelize } from "../db";
import Product from "./products";

class Brand extends Model {
  public id!: number;
  public Brand!: string;
}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Brand", // nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false,
  }
);

// Brand.hasMany(Product, { foreignKey: "brand" });
// Product.belongsTo(Brand, { foreignKey: "brand" });

export default Brand;
