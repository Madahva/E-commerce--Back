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
exports.shopicreate = void 0;
const shopincard_1 = __importDefault(require("../models/shopincard"));
const shopicreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Name, Img, Price, Amount, Total } = req.body;
    try {
        console.log(shopincard_1.default, "vida");
        res.send("aqui estamos por que fue donde nos puso la vida");
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.shopicreate = shopicreate;
