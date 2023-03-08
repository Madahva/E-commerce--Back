import products from "./products";
import { Router } from "express";
import User from "./User";
import category from "./category";
import filters from "./filters";
import email from "./email";
import read from "./read";
import paymentRouter from "./paymentRouter"
import brand from "./brand";

const router = Router();

router.use("/products", products);
router.use("/User", User);
router.use("/category", category);
router.use("/filters", filters);
router.use("/email", email);
router.use("/read", read);
router.use("/", paymentRouter)
router.use("/brand",brand)
export default router;
