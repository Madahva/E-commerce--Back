
import { Model, DataTypes, Association } from "sequelize";
import { sequelize } from "../db";
import Category from "../models/category";
import Brand from "./Brand";

class Product extends Model {
  public id!: string;
  public name!: string;
  public quantity!: number;
  public description!: string;
  public img!: string;
  public price!: string;
  public deleted!: boolean;
  public rating!: string;
  public Marca!: string;

  // Define las propiedades de la relación
  public readonly Category?: Category;
  public readonly brand?: Brand;


  public static associations: {
    Category: Association<Product, Category>;
     Brand: Association<Product, Brand>;
  };

  // Define la relación con Category
  public static associate(): void {
    Product.belongsTo(Category, { foreignKey: "category_id", as: "Category" });
   Product.belongsTo(Brand, { foreignKey: "brand", as: "Brand" });
   }
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
      defaultValue: 0.0,
    },
   Marca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Brand",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "products",
    timestamps: true,
    underscored: true,
    createdAt: false,
    updatedAt : false
  }
);


Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });
Brand.hasMany(Product, { foreignKey: "Marca" });
Product.belongsTo(Brand, { foreignKey: "Marca" });

export default Product;
