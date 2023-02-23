import { Router} from "express";
import { getUser ,postuser } from "../Controlllers/User";
const router = Router();


router.get("/",getUser)
router.post("/",postuser)


export default router 