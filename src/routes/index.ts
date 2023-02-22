import { Router } from "express";
import userRoutes from "./user";
import productsRoutes from "./product"

const router = Router();

router.use("/user", userRoutes);
router.use("/product", productsRoutes);

export default router;
