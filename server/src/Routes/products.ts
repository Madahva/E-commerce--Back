import { getUsers ,postproduc , borradologico ,getid} from "../Controlllers/products";
import { Router} from "express";
const router = Router();

router.get("/", getUsers);
router.post("/",postproduc)
router.delete("/:id",borradologico)
router.get("/:id",getid)
export default router;