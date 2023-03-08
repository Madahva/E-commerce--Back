import { Request, Response } from "express";
import Brand from "../models/Brand";
import Category from "../models/category";
import Products from "../models/products";

export const getproduc = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.query;

  try {
    if (!name) {
      const db = await Products.findAll({ include: Category });
      const fi = db.filter((dr) => dr.deleted === false);
      res.status(200).send(fi);
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

export const postproduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    id,
    rating,
    deleted,
    price,
    img,
    description,
    quantity,
    name,
    category_id,
    Marca,
  } = req.body;

  try {
    const repet = await Products.findOne({ where: { name: name } });
    if (repet !== null) {
      res.status(400).json({ error: "Product already exists" });
    } else if (!price || !img || !description || !name) {
      res.status(400).send({ error: "insert information" });
    } else if (!category_id) {
      res.status(400).send({ error: "insert category" });
    } else if (!Marca) {
      res.status(400).send({ error: "insert Marca" });
    }else {
      // Busca la categoría y la marca en la base de datos
      const category = await Category.findOne({ where: { id: category_id } });
      const brandg = await Brand.findOne({ where: { brand: Marca } });
      
      if (category === null) {
        res.status(400).json({ error: "Category does not exist" });
      } else if (brandg === null) {
        res.status(400).json({ error: "Brand does not exist" });
      } else {
        // Crea el producto con el id de la categoría
        const newproduct = await Products.create({
          id,
          rating,
          deleted,
          price,
          img,
          description,
          quantity,
          name,
          category_id: category.id,
          Marca,
        });

        res.status(201).json({ message: "Product created successfully" });
      }
    }
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

export const patchproduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const {
    rating,
    deleted,
    price,
    img,
    description,
    quantity,
    name,
    category_id,
    Marca,
  } = req.body;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      res.status(201).json({ error: "Product not found" });
    } else {
      // Busca la categoría en la base de datos
      const category = await Category.findOne({ where: { id: category_id } });
      if (category === null) {
        res.status(202).json({ error: "Category does not exist" });
      } else {
        // Actualiza el producto con los datos proporcionados
        await product.update({
          rating,
          deleted,
          price,
          img,
          description,
          quantity,
          name,
          category_id,
          Marca,
        });
        res.status(200).json({ message: "Product updated successfully" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
