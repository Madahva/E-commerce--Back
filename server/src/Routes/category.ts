import { Router} from "express";
import { crearcate } from "../Controlllers/category";
const router = Router(); 


router.post("/",crearcate)