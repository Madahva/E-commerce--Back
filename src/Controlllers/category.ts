import { Request, Response } from "express";
import Category from "../models/category";

export const crearcate = async (req: Request, res: Response): Promise<void> => {
  const { typecategory } = req.body;
  try {
    const fil = await Category.findOne({
      where: { typecategory: typecategory },
    });
    if (fil !== null) {
      res.status(400).json({ error: "Product already exists" });
    } else {
      const db = await Category.create({ typecategory });
      res.status(200).send("create succesfully");
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getcategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cot = await Category.findAll();
    res.status(200).send(cot);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const inffo = await Category.findByPk(id);

    res.status(200).send(inffo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
