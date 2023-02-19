import { Request, Response } from "express";
import Producto from "../models/products";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("DBCBB!",Producto.findOne())
    res.json({ message: "estiy soprendido  " });
  } catch (error) {
    res.status(500).send("nopaso");
  }
}