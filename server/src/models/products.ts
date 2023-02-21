import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db"; // Importa la instancia de Sequelize
import Category from "./category";

class Products extends Model {
  public id!: string;
  public name!: string;
  public quantity?: number;
  public description?: string;
  public img!: string;
  public price!: number;
  public deleted?: boolean;
  public rating!: number;
  public category! : number;
}
Products.init(
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
      defaultValue:
        "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/521-bust-in-silhouette-coloring-page.png",
    },
    price: {
      type: DataTypes.DECIMAL(6, 2), // hasta un maximo de 9999.99
      allowNull: false,
    },
    deleted: {
      //borrado logico
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      defaultValue: 5.0,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  },
  {
    sequelize,
    tableName: "products", // nombre de la tabla en la base de datos
  }
);
Products.belongsTo(Category);
Category.belongsToMany(Products ,{ through: 'producscategory'});

export default Products;
