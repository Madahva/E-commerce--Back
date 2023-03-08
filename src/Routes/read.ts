import { Router} from "express";
const router = Router();
import { readCategory} from "../Services/categories.service";
import { readProducts} from "../Services/products.service";

router.get("/category",readCategory)
router.get("/products",readProducts)

export default router