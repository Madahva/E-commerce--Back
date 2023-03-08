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
const axios_1 = __importDefault(require("axios"));
const items = [
    {
        title: "Point Mini",
        quantity: 1,
        unit_price: 10,
    },
    {
        title: "Point Mini",
        quantity: 1,
        unit_price: 10,
    },
    {
        title: "Point Mini2",
        quantity: 2,
        unit_price: 10,
    },
];
class PaymentService {
    createPayment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "https://api.mercadopago.com/checkout/preferences";
            const body = {
                payer_email: "${process.env.PAYER_EMAIL} ",
                items: data,
                back_urls: {
                    failure: "/failure",
                    pending: "/pending",
                    success: "/success",
                },
            };
            const payment = yield axios_1.default.post(url, body, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                },
            });
            return payment.data;
        });
    }
    createSubscription() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "https://api.mercadopago.com/preapproval";
            const body = {
                reason: "Suscripción de ejemplo",
                auto_recurring: {
                    frequency: 1,
                    frequency_type: "months",
                    transaction_amount: 10,
                    currency_id: "ARS",
                },
                back_url: "https://google.com.ar",
                payer_email: "${process.env.PAYER_EMAIL} ",
            };
            const subscription = yield axios_1.default.post(url, body, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                },
            });
            return subscription.data;
        });
    }
}
exports.default = PaymentService;
