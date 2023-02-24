import products from "./products"
import {Router } from "express";
import User from "./User";
import category from "./category"
import filters from "./filters";
import email from "./email";
const router = Router();

router.use("/products",products);
router.use("/User",User)
router.use("/category",category)
router.use("/filters",filters)
 router.use("/email",email)
export default router;
