// import { Model, DataTypes, Sequelize } from "sequelize";
 //// import { AllowNull } from "sequelize-typescript";
// import { sequelize } from "../db"; // Importa la instancia de Sequelize
// import Category from "./category";

// class Products extends Model {
//   public id!: string;
//   public name!: string;
//   public quantity?: number;
//   public description?: string;
//   public img!: string;
//   public price!: number;
//   public deleted?: boolean;
//   public rating!: number;
//   public Marca! : string;
//   public category_id! : number;

  
// }
// ;
// Products.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//     },
//     img: {
//       type: DataTypes.STRING,
//       defaultValue:
//         "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/521-bust-in-silhouette-coloring-page.png",
//     },
//     price: {
//       type: DataTypes.DECIMAL(6, 2), // hasta un maximo de 9999.99
//       allowNull: false,
//     },
//     deleted: {
//       //borrado logico
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     rating: {
//       type: DataTypes.DECIMAL(3, 2),
//       defaultValue: 5.0,
//     },
//     category_id: { // definimos la columna category_id
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: { // establecemos la relación con la tabla Category
//         model: Category,
//         key: 'id'
//       }
//     },
//     Marca :{
//       type: DataTypes.STRING,
//       allowNull: true ,
//     },
//   },
//   {
//     sequelize ,
//     tableName: "products", // nombre de la tabla en la base de datos
//   }
// );

// // Category.hasMany(Products);
// // Products.belongsTo(Category);
 
// //  Products.belongsTo(Category);
// export default Products;
import { Model, DataTypes, Association } from "sequelize";
import { sequelize } from "../db";
import Category from "../models/category";

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


  public static associations: {
    Category: Association<Product, Category>;
  };

  // Define la relación con Category
  public static associate(): void {
    Product.belongsTo(Category, { foreignKey: "category_id", as: "Category" });
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
      type: DataTypes.STRING,
      allowNull: false,
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

export default Product;
