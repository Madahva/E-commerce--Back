import products from "./products"
import {Router } from "express";
const router = Router();

router.use("/",products);

export default router;
