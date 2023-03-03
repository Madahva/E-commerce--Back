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
exports.newUser = exports.pago = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;
const pago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        //creacion y configuracion del envio de mail
        var transporter = yield nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: "HyreMySkills@gmail.com",
                pass: PASSWORD_ADMIN,
            },
        });
        var mailOptions = {
            from: "HyreMySkills@gmail.com",
            to: `${email}`,
            subject: `SUCCESSFUL PAYMENT 👏`,
            html: `THANK YOU FOR YOUR PURCHASE AND BE PART OF ECOMERCE. ✍️📉`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send(error);
                console.log(error);
            }
            else {
                res.send("Email enviado: " + info.response);
                console.log("Email enviado: " + info.response);
            }
        });
    }
    catch (error) {
        res.status(402).send(error);
    }
});
exports.pago = pago;
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        var transporter = yield nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: "HyreMySkills@gmail.com",
                pass: PASSWORD_ADMIN,
            },
        });
        var mailOptions = {
            from: "HyreMySkills@gmail.com",
            to: `${email}`,
            subject: `WELCOME A ECOMERCE 👏`,
            html: `THANK YOU FOR SUBSCRIBING TO OUR PAGE ENJOY GREAT DISCOUNTS. 👾⚒️`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send(error);
                console.log(error);
            }
            else {
                res.send("Email enviado: " + info.response);
                console.log("Email enviado: " + info.response);
            }
        });
    }
    catch (error) {
        res.status(402).send(error);
        console.log(error);
    }
});
exports.newUser = newUser;
