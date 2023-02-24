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
exports.filterProductsByRating = exports.filterProductsByCategory = exports.filterProductsByBrand = exports.filterProductsByPrice = void 0;
const products_1 = __importDefault(require("../models/products"));
const sequelize_1 = require("sequelize");
const filterProductsByPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { min, max } = req.body;
    try {
        const products = yield products_1.default.findAll({
            where: {
                price: {
                    [sequelize_1.Op.between]: [Number(min), Number(max)]
                }
            }
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.filterProductsByPrice = filterProductsByPrice;
const filterProductsByBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Marca } = req.body;
    try {
        const products = yield products_1.default.findAll({
            where: {
                Marca: {
                    [sequelize_1.Op.like]: `%${Marca}%`
                }
            }
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.filterProductsByBrand = filterProductsByBrand;
const filterProductsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category_id } = req.body;
    console.log(category_id);
    try {
        const products = yield products_1.default.findAll({
            where: {
                category_id: category_id
            }
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});
exports.filterProductsByCategory = filterProductsByCategory;
const filterProductsByRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rating } = req.body;
    try {
        const products = yield products_1.default.findAll({
            where: {
                rating: {
                    [sequelize_1.Op.eq]: rating
                }
            }
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.filterProductsByRating = filterProductsByRating;
