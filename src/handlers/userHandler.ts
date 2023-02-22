import { Request, Response } from "express";
import {
  getUserById,
  toLogin,
  toRegister,
} from "../controllers/userController";

export const getUserByIdHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const users = await getUserById(id);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const toLoginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await toLogin(email);
    if (!user || user.password !== password) {
      res.status(401).send("Invalid email or password");
    } else {
      res.send(user);
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const toRegisterHandler = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (
    !name ||
    !name.trim() ||
    !email ||
    !email.trim() ||
    !password ||
    !password.trim()
  ) {
    return res
      .status(400)
      .json({ error: "name, email und password are required 🤭" });
  }

  try {
    const userRes = await toRegister(req.body);
    res.status(200).send(userRes);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
