import products from "./products"
import {Router } from "express";
import User from "./User";
import category from "./category"
const router = Router();

router.use("/products",products);
router.use("/User",User)
router.use("/category",category)
export default router;
