import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../indexdb";

interface ProductAttributes {
  id: string;
  name: string;
  quantity: number;
  description?: string;
  img?: string;
  price: number;
}

type ProductCreationAttributes = Optional<ProductAttributes, "id">;

class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: string;
  public name!: string;
  public quantity!: number;
  public description?: string;
  public img?: string;
  public price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
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
    },
    img: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(6, 2), // hasta un maximo de 9999.99
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Product",
  }
);

export default Product;
