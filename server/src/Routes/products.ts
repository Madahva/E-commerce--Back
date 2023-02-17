import { Router, Request, Response } from "express";
import { getUsers } from "../Controlllers/products";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const productos = await getUsers(req, res);
    res.status(200).json(productos);
  } catch (err) {
    res.status(402).send(err);
  }
});

export default router;