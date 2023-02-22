import { Op } from "sequelize";
import { Product } from "../models/Product";

export const createProduct = async (productData: any) => {
  return await Product.create(productData);
};

export const searchByName = async (name: string) => {
  return await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
};
