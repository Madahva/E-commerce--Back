import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";

class PaymentHistory extends Model {
  public id!: number;
  public title!: string;
  public price!: number;
  public amount!: number;
  public quantity!: number;
  public user!: string;
}

PaymentHistory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "payment_history",
    timestamps: true,
  }
);

export default PaymentHistory;
