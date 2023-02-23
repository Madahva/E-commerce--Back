import products from "./products"
import {Router } from "express";
import User from "./User";
import category from "./category"
import email from "./email"
const router = Router();

router.use("/products",products); //  ruta de (crear,traer,buscar id name y orrrado logico )
router.use("/User",User)  // crea usuario 
router.use("/category",category) // crea categorya
router.use("/Email",email) // envio de correo 
export default router;
