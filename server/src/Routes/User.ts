import { Router} from "express";
import { getUser } from "../Controlllers/User";
const router = Router();


router.get("/",getUser)



export default router 