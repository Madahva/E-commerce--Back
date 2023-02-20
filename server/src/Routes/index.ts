import products from "./products"
import {Router } from "express";
const router = Router();

router.use("/products",products);
router.use("/category",)

export default router;
