import { Router} from "express";
import { filterProductsByPrice,filterProductsByBrand,filterProductsByCategory} from "../Controlllers/filters";
const router = Router(); 

router.get("/",filterProductsByPrice)
router.get("/brand",filterProductsByBrand)
router.get("/category",filterProductsByCategory)
// router.get("/rating",filterProductsByRating)

export default router