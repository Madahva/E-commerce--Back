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
exports.here = exports.readbrand = void 0;
const Brand_1 = __importDefault(require("../models/Brand"));
const readbrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = [
        {
            brand: "SONY",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "ACER",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "DELL",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "PHILIPS",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "AMD",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "LG",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "HP",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "ELECTROLUX",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "NOBLEX",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "Lenovo",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "BGH",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
        {
            brand: "HUAWEI",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
        },
    ];
    let i = 0;
    while (i < 9) {
        yield Brand_1.default.create(category[i]);
        i++;
    }
    const categ = yield Brand_1.default.findAll();
    res.status(200).json(categ);
});
exports.readbrand = readbrand;
function here() {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.here = here;
