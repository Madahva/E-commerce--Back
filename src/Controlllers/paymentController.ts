import { Request, Response } from "express";
import PaymentHistory from "../models/PaymentHistory";

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
      return res
        .status(500)
        .json({ error: true, msg: "Failed to create subscription" });
    }
  }
}

export const createPaymentHistoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const paymentData = req.body;
    const paymentHistories = await Promise.all(
      paymentData.map(async (data: any) => {
        const newPayment = await PaymentHistory.create(data);
        return newPayment;
      })
    );

    res.status(201).json({
      success: true,
      data: paymentHistories,
      message: "Payment histories created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getAllPaymentHistoriesController = async (
  req: Request,
  res: Response
) => {
  try {
    const paymentHistories = await PaymentHistory.findAll();

    res.status(200).json({
      success: true,
      data: paymentHistories,
      message: "Payment histories retrieved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getPaymentHistoriesByEmailController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.query;

    const paymentHistories = await PaymentHistory.findAll({
      where: {
        user: email,
      },
    });

    res.status(200).json({
      success: true,
      data: paymentHistories,
      message: `Payment histories for "${email}" retrieved successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export default PaymentController;
