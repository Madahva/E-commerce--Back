import { Router} from "express";
import { createByBrand, getbrand, getIdbrand } from "../Controlllers/Brand";
const router = Router();



router.get("/:id",getIdbrand)
router.get("/",getbrand)
router.post("/CreateByCategory",createByBrand)




export default router