import { getproduc ,postproduct , borradologico ,getid,patchpro} from "../Controlllers/products";
import { Router} from "express";
const router = Router();

router.get("/", getproduc);
router.post("/",postproduct)
router.delete("/:id",borradologico)
router.get("/:id",getid)
router.patch("/editarpro/:id",patchpro)
export default router;