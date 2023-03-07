import { Router, Request, Response } from "express";

const router = Router();
import PaymentController from "../Controlllers/paymentController" 
import PaymentService from "../Services/paymentService";
const PaymentInstance = new PaymentController(new PaymentService());

router.post("/payment", function (req: Request, res: Response) {
  PaymentInstance.getPaymentLink(req, res);
});

export default router;
