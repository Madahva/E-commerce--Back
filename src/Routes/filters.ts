import { Router } from "express";
import {
  filterProductsByPrice,
  filterProductsByBrand,
  filterProductsByCategory,
  filterProductsByRating,
  filterProductsByName,
  getBrand
} from "../Controlllers/filters";
const router = Router();

router.get("/price", filterProductsByPrice);
router.get("/brand", filterProductsByBrand);
router.get("/category", filterProductsByCategory);
router.get("/rating", filterProductsByRating);
router.get("/name",filterProductsByName);
router.get("/marca",getBrand)
export default router;
