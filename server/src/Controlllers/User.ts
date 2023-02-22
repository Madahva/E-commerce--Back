import { Request, Response } from "express";
import User from "../models/User";

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const getuser = await User.findAll();
    res.status(200).send(getuser);
  } catch (error) {
    res.status(402).send(error);
    
  }
};

export const postuser = async (req: Request, res: Response): Promise<void> => {
  const { email, name } = req.body;
  try {
    const repetido = await User.findOne({ where: { name: name } });
    if (repetido) {
      res.status(400).send("client already exists");
    } else if (await User.findOne({ where: { email: email } })) {
      res.status(400).send("there is already a client with that email");
    } else {
      const newuser = await User.create({ email, name });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logicobo = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params
    if (!id) {
        res.status(400).send("Missing id parameter");
        return;
      }
  try {
    const borrado = await User.findByPk(id);
    if (  borrado ===null) {
      res.status(200).send(`resource with id ${id} not found`);
    } else if (!borrado.deleted ) {
      await User.update({ deleted: true }, { where: { id: id } });
      res.status(200).send(`resource removed  id : ${id}`);
    } else if (borrado.deleted ) {
      await User.update({ deleted: false }, { where: { id: id } });
      res.status(200).send({ message: "User is active" });
    } 
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

// {
//     "email" : "alex.des.d@gmail.com",
//     "name": "alexis vega"

// }
