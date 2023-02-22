import { Response, Request } from "express";
import { searchByName, createProduct } from "../controllers/productController";

export const createProductHandler = async (req: Request, res: Response) => {
  const productData = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
    image: req.body.image,
    catalogId: req.body.catalogId,
  };
  try {
    const createdItem = await createProduct(productData);
    res.status(200).send(createdItem);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const searchByNameHandler = async (req: Request, res: Response) => {
  const itemName = req.params.name;
  console.log(itemName);
  try {
    const resultNames = await searchByName(itemName);
    res.status(200).json(resultNames);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
