import products from "./products"
import {Router } from "express";
import User from "../Routes/User";
const router = Router();

router.use("/products",products);
router.use("/User",User)

export default router;
