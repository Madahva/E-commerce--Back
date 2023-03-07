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
exports.getId = exports.getcategory = exports.crearcate = void 0;
const category_1 = __importDefault(require("../models/category"));
const crearcate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { typecategory } = req.body;
    try {
        const fil = yield category_1.default.findOne({
            where: { typecategory: typecategory },
        });
        if (fil !== null) {
            res.status(400).json({ error: "Product already exists" });
        }
        else {
            const db = yield category_1.default.create({ typecategory });
            res.status(200).send("create succesfully");
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.crearcate = crearcate;
const getcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cot = yield category_1.default.findAll();
        res.status(200).send(cot);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.getcategory = getcategory;
const getId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const inffo = yield category_1.default.findByPk(id);
        res.status(200).send(inffo);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.getId = getId;
