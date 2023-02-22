import { Request, Response } from "express";
import Category from "../models/category";
import Products from "../models/products";

export const getproduc = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.query;

  try {
    if (!name) {
      const db = await Products.findAll();
      const fi = db.filter((dr) => dr.deleted === false);
      res.status(200).send(fi);
    } else {
      const filterna = await Products.findAll();
      const filter = filterna.filter(
        (e) => e.name.toLowerCase() === String(name).toLowerCase()
      );
      if (filter.length === 0) {
        res.status(404).json({ message: "product not found" });
      } else if (filter[0].deleted === true) {
        console.log(filter[0]);
        res.status(404).json({ message: "removed product" });
      } else {
        res.status(200).json(filter);
      }
    }
  } catch (error) {
    res.status(402).send(error);
    console.log(error);
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
    category_id, // cambia el nombre del campo a category_id
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
    } else {
      // Busca la categoría en la base de datos
      const category = await Category.findOne({ where: { typecategory: category_id } });
      if (category === null) {
        res.status(400).json({ error: "Category does not exist" });
      } else {
        // Crea el producto con el id de la categoría
        const newproduc = await Products.create({
          id,
          rating,
          deleted,
          price,
          img,
          description,
          quantity,
          name,
          category_id: category.id, // agrega el id de la categoría
          Marca,
        });

        res.status(201).json({ message: "Product created successfully" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    console.log(error);
  }
};

export const borradologico = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const borrado = await Products.findByPk(id);
    if (borrado === null) {
      res.status(200).send(`resource with id ${id} not found`);
    } else if (borrado.deleted === false) {
      await Products.update({ deleted: true }, { where: { id: id } });
      res.status(200).send(`resource removed  id : ${id}`);
    } else if (borrado.deleted === true) {
      await Products.update({ deleted: false }, { where: { id: id } });
      res.status(200).send({ message: "User is active" });
    }
  } catch (error) {
    res.send(error);
  }
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
   
// }