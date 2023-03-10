import { Request, Response } from "express";
import Products from "../models/products";
import { Op } from "sequelize";

export const filterProductsByPrice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { min, max } = req.body;

  try {
    const products = await Products.findAll({
      where: {
        price: {
          [Op.between]: [Number(min), Number(max)],
        },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const filterProductsByBrand = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { Marca } = req.body;
  try {
    const products = await Products.findAll({
      where: {
        Marca: {
          [Op.like]: `%${Marca}%`,
        },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const filterProductsByCategory = async (req: Request, res: Response): Promise<void> => {
  const { category_id } = req.query;
  try {
    const products = await Products.findAll({
      where: {
        category_id: category_id 
      }
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
   
  }
}



export const filterProductsByRating = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { rating } = req.body;
  try {
    const products = await Products.findAll({
      where: {
        rating: {
          [Op.eq]: String(rating),
        },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const filterProductsByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name } = req.query;
  try {
    const products = await Products.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const getBrand = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const product = await Products.findAll({
//       attributes: ["Marca"],
//     });

//     if (!product ) {
//       res.status(404).json({ error: "Product not found" });
//     }else {
//       res.status(200).json(product);
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };



