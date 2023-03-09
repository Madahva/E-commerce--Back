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
exports.here = exports.readCategory = void 0;
const category_1 = __importDefault(require("../models/category"));
// export async function readCategory(id?: string) {
//   let data: Category[];
//   if (id) {
//     data = await Category.findAll({ where: { id: id } });
//   } else {
//     data = await Category.findAll();
//   }
//   let result = {
//     data,
//   };
//   if (!result.data || !result.data.length || result.data.length === 0) {
//     const category = [
//         {
//             typecategory: "drones"         
//         }
//     ];
//     let i = 0;
//     while (i < Category.length) {
//       await Category.create(category[i]);
//       i++;
//     }
//     data = await Category.findAll();
//     result = {
//       data,
//     };
//   }
//   return result;
// }
const readCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = [
        {
            typecategory: "Smartphones"
        },
        {
            typecategory: "Televisions"
        },
        {
            typecategory: "Computers"
        },
        {
            typecategory: "Game Consoles"
        },
        {
            typecategory: "Cameras"
        },
        {
            typecategory: "Smart Watches"
        },
        {
            typecategory: "Speakers"
        },
        {
            typecategory: "Drones"
        },
        {
            typecategory: "Headphones"
        }
    ];
    let i = 0;
    while (i < 9) {
        yield category_1.default.create(category[i]);
        i++;
    }
    const categ = yield category_1.default.findAll();
    res.status(200).json(categ);
});
exports.readCategory = readCategory;
function here() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.here = here;
