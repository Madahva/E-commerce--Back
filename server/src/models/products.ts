import { Model, DataTypes, Sequelize } from "sequelize";
import {sequelize} from "../indexdb"; // Importa la instancia de Sequelize

class Products extends Model {
  public id!: string;
  public name!: string;
  public quantity!: number;
  public description?: string;
  public img?: string;
  public price!: number;
  public deleted!: boolean;
  public admin!: boolean;
  public rating!: number;
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
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      defaultValue: 5.0,
    },
  },
  {
    sequelize: sequelize,
    tableName: "products", // nombre de la tabla en la base de datos
  }
);

export default Products;
