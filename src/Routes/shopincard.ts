import { Router} from "express";
import { shopicreate } from "../Controlllers/shopincard";
const router = Router();

router.post("/",shopicreate)



export default router ;