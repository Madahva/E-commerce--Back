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
exports.patchproduct = exports.borradologico = exports.postproduct = exports.getid = exports.getproduc = void 0;
const Brand_1 = __importDefault(require("../models/Brand"));
const category_1 = __importDefault(require("../models/category"));
const products_1 = __importDefault(require("../models/products"));
const getproduc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        if (!name) {
            const db = yield products_1.default.findAll({ include: category_1.default });
            const fi = db.filter((dr) => dr.deleted === false);
            res.status(200).send(fi);
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
const postproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, rating, deleted, price, img, description, quantity, name, category_id, Marca, } = req.body;
    try {
        const repet = yield products_1.default.findOne({ where: { name: name } });
        if (repet !== null) {
            res.status(400).json({ error: "Product already exists" });
        }
        else if (!price || !img || !description || !name) {
            res.status(400).send({ error: "insert information" });
        }
        else if (!category_id) {
            res.status(400).send({ error: "insert category" });
        }
        else if (!Marca) {
            res.status(400).send({ error: "insert Marca" });
        }
        else {
            // Busca la categoría y la marca en la base de datos
            const category = yield category_1.default.findOne({ where: { id: category_id } });
            const brandg = yield Brand_1.default.findOne({ where: { brand: Marca } });
            if (category === null) {
                res.status(400).json({ error: "Category does not exist" });
            }
            else if (brandg === null) {
                res.status(400).json({ error: "Brand does not exist" });
            }
            else {
                // Crea el producto con el id de la categoría
                const newproduct = yield products_1.default.create({
                    id,
                    rating,
                    deleted,
                    price,
                    img,
                    description,
                    quantity,
                    name,
                    category_id: category.id,
                    Marca,
                });
                res.status(201).json({ message: "Product created successfully" });
            }
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.postproduct = postproduct;
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
const patchproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { rating, deleted, price, img, description, quantity, name, category_id, Marca, } = req.body;
    try {
        const product = yield products_1.default.findByPk(id);
        if (!product) {
            res.status(201).json({ error: "Product not found" });
        }
        else {
            // Busca la categoría en la base de datos
            const category = yield category_1.default.findOne({ where: { id: category_id } });
            if (category === null) {
                res.status(202).json({ error: "Category does not exist" });
            }
            else {
                // Actualiza el producto con los datos proporcionados
                yield product.update({
                    rating,
                    deleted,
                    price,
                    img,
                    description,
                    quantity,
                    name,
                    category_id,
                    Marca,
                });
                res.status(200).json({ message: "Product updated successfully" });
            }
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.patchproduct = patchproduct;
