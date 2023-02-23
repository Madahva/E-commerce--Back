import { Router} from "express";
const router = Router();
import {newUser,pago} from "../Controlllers/email"
import { Request, Response } from "express";


//Envia mail cuando el pago fue exitoso
router.post("/pagado", pago)

//Envia mail cuando se crea usuario
router.post("/usuario", newUser  )
        
   

export default router