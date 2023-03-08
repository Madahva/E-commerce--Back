"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const express_1 = require("express");
const User_1 = __importDefault(require("./User"));
const category_1 = __importDefault(require("./category"));
const filters_1 = __importDefault(require("./filters"));
const email_1 = __importDefault(require("./email"));
const read_1 = __importDefault(require("./read"));
const paymentRouter_1 = __importDefault(require("./paymentRouter"));
const brand_1 = __importDefault(require("./brand"));
const router = (0, express_1.Router)();
router.use("/products", products_1.default);
router.use("/User", User_1.default);
router.use("/category", category_1.default);
router.use("/filters", filters_1.default);
router.use("/email", email_1.default);
router.use("/read", read_1.default);
router.use("/", paymentRouter_1.default);
router.use("/brand", brand_1.default);
exports.default = router;