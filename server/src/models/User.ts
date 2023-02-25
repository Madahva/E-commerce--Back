import { Model ,DataTypes } from "sequelize";
import  {sequelize} from "../db";
class User extends Model {
    public id!: string;
    public name!: string;
    public email!: string;
    public roll?: string;
    public deleted?: string;
   
}
User.init(
    {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,

      allowNull: false,
    },name :{
      type : DataTypes . STRING, 
      allowNull : false
    },
    email: {
      type: DataTypes.STRING, //  contacto del usuario
      allowNull: false,
    },
    rol: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deleted: {
      //borrado logico
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
   
  },
  {
    timestamps: false,
    sequelize ,
    tableName: "user", 
    createdAt: false,
    updatedAt : false
  }
);
export default User;
