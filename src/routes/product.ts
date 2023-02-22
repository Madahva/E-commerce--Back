import { Router } from "express";
import {
  createProductHandler,
  searchByNameHandler,
} from "../handlers/productHandler";

const router = Router();

router.post("/", createProductHandler);
router.get("/:name", searchByNameHandler);

export default router;
