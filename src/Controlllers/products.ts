import { Request, Response } from "express";
import Brand from "../models/Brand";
import Category from "../models/category";
import Products from "../models/products";

export const getproduc = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.query;

  try {
    if (!name) {
      const db = await Products.findAll({ include: Category });
      // const fi = db.filter((dr) => dr.deleted === false);
      res.status(200).send(db);
    } else {
      const filterna = await Products.findAll({ include: Category},);
      const filter = filterna.filter(
        (e) => e.name.toLowerCase() === String(name).toLowerCase()
      );
      if (filter.length === 0) {
        res.status(404).json({ message: "product not found" });
      } else if (filter[0].deleted === true) {
      
        res.status(404).json({ message: "removed product" });
      } else {
        res.status(200).json(filter);
      }
    }
  } catch (error) {
    res.status(402).send(error);
  }
}; 

export const getid = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
   
    const iddb = await Products.findByPk(id);
    res.status(200).json(iddb);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};



export const borradologico = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  await Products.update(
    {
      deleted: true,
    },
    {
      where: {
        id,
      },
    }
  );
  res.status(201).json({ message: "Product deleted successfully" })
};

// {
//   "name" : "drone 55l",
//   "quantity" :  5 ,
//    "description": "el producto de novedad",
//    "img" : "bjnojnjdob",
//    "price" : 759,
//    "rating" : 4,
//    "Marca": "lg",
//    "category_id": "drone"


