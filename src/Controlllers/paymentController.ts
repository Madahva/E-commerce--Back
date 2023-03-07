import { Request, Response } from "express";

class PaymentController {
  subscriptionService: any;

  constructor(subscriptionService: any) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req: Request, res: Response) {
    const data = req.body;
    try {
      const payment = await this.subscriptionService.createPayment(data);

      return res.json(payment);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }

  async getSubscriptionLink(req: Request, res: Response) {
    try {
      const subscription = await this.subscriptionService.createSubscription();

      return res.json(subscription);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create subscription" });
    }
  }
}

export default PaymentController;
