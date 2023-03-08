import { Request, Response } from "express";
import Brand from "../models/Brand";
import Products from "../models/products";

export const createByBrand = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { brand, img } = req.body;
  try {
    const fil = await Brand.findOne({
      where: { brand: brand },
    });
    if (fil !== null) {
      res.status(400).json({ error: "Brand  already exists" });
    } else {
      const db = await Brand.create({ brand, img });
      res.status(200).send("create succesfully");
    }
  } catch (error) {
    res.status(500).json({ error: "Server error  " });
  }
};

export const getbrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const cot = await Brand.findAll();
    res.status(200).send(cot);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export const getIdbrand = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const inffo = await Brand.findByPk(id);

    res.status(200).send(inffo);
  } catch (error) {
    res.status(500).json({ error: "Server error  " });
  }
};
