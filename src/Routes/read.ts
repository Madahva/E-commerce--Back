import { Router} from "express";
import { readbrand } from "../Services/breadservices";
const router = Router();
import { readCategory} from "../Services/categories.service";
import { readProducts} from "../Services/products.service";

router.get("/category",readCategory)
router.get("/products",readProducts)
router.get("/bread",readbrand)

export default router