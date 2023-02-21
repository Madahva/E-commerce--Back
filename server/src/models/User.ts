import { Model ,DataTypes } from "sequelize";
import  {sequelize} from "../db";
class User extends Model {
    public id!: string;
    public photo!: Text;
    public email?: number;
    public roll?: string;
    public deleted!: string;
   
}
User.init(
    {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,

      allowNull: false,
    },
    photo: {
      // la foto del rostro del usuario
      type: DataTypes.TEXT,
      defaultValue:
        "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/521-bust-in-silhouette-coloring-page.png",
    },
    email: {
      type: DataTypes.STRING, //  contacto del usuario
      allowNull: false,
    },
    roll: {
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
    sequelize : sequelize,
    tableName: "user", 
  }
);
export default User;
