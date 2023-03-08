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
exports.getIdbrand = exports.getbrand = exports.createByBrand = void 0;
const Brand_1 = __importDefault(require("../models/Brand"));
const createByBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brand, img } = req.body;
    try {
        const fil = yield Brand_1.default.findOne({
            where: { brand: brand },
        });
        if (fil !== null) {
            res.status(400).json({ error: "Brand  already exists" });
        }
        else {
            const db = yield Brand_1.default.create({ brand, img });
            res.status(200).send("create succesfully");
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server error  " });
    }
});
exports.createByBrand = createByBrand;
const getbrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cot = yield Brand_1.default.findAll();
        res.status(200).send(cot);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.getbrand = getbrand;
const getIdbrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const inffo = yield Brand_1.default.findByPk(id);
        res.status(200).send(inffo);
    }
    catch (error) {
        res.status(500).json({ error: "Server error  " });
    }
});
exports.getIdbrand = getIdbrand;
