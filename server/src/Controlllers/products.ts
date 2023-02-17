import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    // Código asíncrono aquí...
    res.json({ message: "vamos a hacerlo" });
  } catch (error) {
    res.status(500).send("nopaso");
  }
}