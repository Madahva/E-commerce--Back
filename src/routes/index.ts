import { Router } from "express";
import userRoutes from "./user";
//import productsRoutes from "./products"

const router = Router();

router.use("/user", userRoutes);
//router.use("/products", productsRoutes);
export default router;
