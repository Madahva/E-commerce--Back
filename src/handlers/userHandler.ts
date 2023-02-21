import { Request, Response } from "express";
import { getUsers } from "../controllers/userController";

export const getUserHandler = async (req: Request, res: Response) => {
  const id = req.params.id!;
  try {
    const users = await getUsers(id);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
