import { getproduc,borradologico,getid} from "../Controlllers/products";
import {postproduct , patchproduct} from "../Controlllers/produc2"
import { Router} from "express";
const router = Router();

router.get("/", getproduc);
router.post("/",postproduct)
router.delete("/:id",borradologico)
router.get("/:id",getid)
router.patch("/edit/:id",patchproduct)
export default router;