import { Router} from "express";
import { getUser ,postuser , logicobo} from "../Controlllers/User";
const router = Router();


router.get("/",getUser)
router.post("/",postuser)
router.delete("/:id",logicobo)

export default router 