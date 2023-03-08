import { Router, Request, Response } from "express";
import PaymentController, {
  createPaymentHistoryController,
  getAllPaymentHistoriesController,
  getPaymentHistoriesByEmailController,
} from "../Controlllers/paymentController";
import PaymentService from "../Services/paymentService";

const router = Router();
const PaymentInstance = new PaymentController(new PaymentService());

router.post("/payment", function (req: Request, res: Response) {
  PaymentInstance.getPaymentLink(req, res);
});

router.post("/paymentHistory", createPaymentHistoryController);
router.get("/paymentHistory", getAllPaymentHistoriesController);
router.get("/userPaymentHistory", getPaymentHistoriesByEmailController);

export default router;
