const { DataTypes } = require("sequelize");


const products = (sequelize : any) => {
  sequelize.define(
    "products",
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
      timestamps: false,
    }
  );
};

module.exports = products;
