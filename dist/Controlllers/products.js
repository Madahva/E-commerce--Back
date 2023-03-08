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
exports.borradologico = exports.getid = exports.getproduc = void 0;
const category_1 = __importDefault(require("../models/category"));
const products_1 = __importDefault(require("../models/products"));
const getproduc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        if (!name) {
            const db = yield products_1.default.findAll({ include: category_1.default });
            // const fi = db.filter((dr) => dr.deleted === false);
            res.status(200).send(db);
        }
        else {
            const filterna = yield products_1.default.findAll({ include: category_1.default });
            const filter = filterna.filter((e) => e.name.toLowerCase() === String(name).toLowerCase());
            if (filter.length === 0) {
                res.status(404).json({ message: "product not found" });
            }
            else if (filter[0].deleted === true) {
                res.status(404).json({ message: "removed product" });
            }
            else {
                res.status(200).json(filter);
            }
        }
    }
    catch (error) {
        res.status(402).send(error);
    }
});
exports.getproduc = getproduc;
const getid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const iddb = yield products_1.default.findByPk(id);
        res.status(200).json(iddb);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.getid = getid;
const borradologico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield products_1.default.update({
        deleted: true,
    }, {
        where: {
            id,
        },
    });
    res.status(201).json({ message: "Product deleted successfully" });
});
exports.borradologico = borradologico;
// {
//   "name" : "drone 55l",
//   "quantity" :  5 ,
//    "description": "el producto de novedad",
//    "img" : "bjnojnjdob",
//    "price" : 759,
//    "rating" : 4,
//    "Marca": "lg",
//    "category_id": "drone"
