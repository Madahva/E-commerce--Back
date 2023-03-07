"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const paymentController_1 = __importDefault(require("../Controlllers/paymentController"));
const paymentService_1 = __importDefault(require("../Services/paymentService"));
const PaymentInstance = new paymentController_1.default(new paymentService_1.default());
router.post("/payment", function (req, res) {
    PaymentInstance.getPaymentLink(req, res);
});
exports.default = router;
