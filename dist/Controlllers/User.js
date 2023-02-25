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
exports.logicobo = exports.postuser = exports.getUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getuser = yield User_1.default.findAll();
        res.status(200).send(getuser);
    }
    catch (error) {
        res.status(402).send(error);
    }
});
exports.getUser = getUser;
const postuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.body;
    try {
        const repetido = yield User_1.default.findOne({ where: { name: name } });
        if (repetido) {
            res.status(400).send("client already exists");
        }
        else if (yield User_1.default.findOne({ where: { email: email } })) {
            res.status(400).send("there is already a client with that email");
        }
        else {
            const newuser = yield User_1.default.create({ email, name });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.postuser = postuser;
const logicobo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).send("Missing id parameter");
        return;
    }
    try {
        const borrado = yield User_1.default.findByPk(id);
        if (borrado === null) {
            res.status(200).send(`resource with id ${id} not found`);
        }
        else if (!borrado.deleted) {
            yield User_1.default.update({ deleted: true }, { where: { id: id } });
            res.status(200).send(`resource removed  id : ${id}`);
        }
        else if (borrado.deleted) {
            yield User_1.default.update({ deleted: false }, { where: { id: id } });
            res.status(200).send({ message: "User is active" });
        }
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
exports.logicobo = logicobo;
// {
//     "email" : "alex.des.d@gmail.com",
//     "name": "alexis vega"
// }
