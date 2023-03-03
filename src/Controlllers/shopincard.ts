import { Request, Response } from "express";
import Shopincard from "../models/shopincard";

export const shopicreate = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { Name, Img, Price, Amount, Total } = req.body;
  try {
    console.log(Shopincard)
    res.send("aqui estamos por que fue donde nos puso la vida");
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
