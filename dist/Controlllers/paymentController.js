"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentHistoriesByEmailController = exports.getAllPaymentHistoriesController = exports.createPaymentHistoryController = void 0;
const PaymentHistory_1 = __importDefault(require("../models/PaymentHistory"));
class PaymentController {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }
    getPaymentLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const payment = yield this.subscriptionService.createPayment(data);
                return res.json(payment);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ error: true, msg: "Failed to create payment" });
            }
        });
    }
    getSubscriptionLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscription = yield this.subscriptionService.createSubscription();
                return res.json(subscription);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ error: true, msg: "Failed to create subscription" });
            }
        });
    }
}
const createPaymentHistoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentData = req.body;
        const paymentHistories = yield Promise.all(paymentData.map((data) => __awaiter(void 0, void 0, void 0, function* () {
            const newPayment = yield PaymentHistory_1.default.create(data);
            return newPayment;
        })));
        res.status(201).json({
            success: true,
            data: paymentHistories,
            message: "Payment histories created successfully",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
exports.createPaymentHistoryController = createPaymentHistoryController;
const getAllPaymentHistoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentHistories = yield PaymentHistory_1.default.findAll();
        res.status(200).json({
            success: true,
            data: paymentHistories,
            message: "Payment histories retrieved successfully",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
exports.getAllPaymentHistoriesController = getAllPaymentHistoriesController;
const getPaymentHistoriesByEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const paymentHistories = yield PaymentHistory_1.default.findAll({
            where: {
                user: email,
            },
        });
        res.status(200).json({
            success: true,
            data: paymentHistories,
            message: `Payment histories for "${email}" retrieved successfully`,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
exports.getPaymentHistoriesByEmailController = getPaymentHistoriesByEmailController;
exports.default = PaymentController;
