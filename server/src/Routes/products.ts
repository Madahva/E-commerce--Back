import { getproduc ,postproduct , borradologico ,getid} from "../Controlllers/products";
import { Router} from "express";
const router = Router();

router.get("/", getproduc);
router.post("/",postproduct)
router.delete("/:id",borradologico)
router.get("/:id",getid)
export default router;