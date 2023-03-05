// import { Model, DataTypes ,Association } from 'sequelize';
// import { sequelize } from '../db';
// import User from './User';



// interface ProductData {
//   Name: string[];
//   Image?: string[];
//   Price?: number;
//   Amount?: number;
//   Total?: number;
// }

// class Shopincard extends Model {
//   public id!: number;
//   public user_id!: number;
//   public products!: ProductData;

//  // Define las propiedades de la relación
//  public readonly User?: User;


//  public static associations: {
//    Category: Association<Shopincard, User>;
//  };

//  // Define la relación con Category
//  public static associate(): void {
//   Shopincard.belongsTo(User, { foreignKey: "category_id", as: "User" });
//  }
// }

// Shopincard.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     user_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "User",
//         key: "id",
//       },
//     },
//     products: {
//       type: DataTypes.JSON,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,
//     sequelize ,
//     tableName: "Shopincard", 
//     createdAt: false,
//     updatedAt : false
//   },
// );



// export default Shopincard ;