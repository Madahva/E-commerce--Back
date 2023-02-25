import { Router} from "express";
import { crearcate , getcategory ,getId} from "../Controlllers/category";
const router = Router(); 


router.post("/",crearcate)
router.get("/",getcategory)
router.get("/:id",getId)

export default router