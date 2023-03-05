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
exports.readProducts = void 0;
const products_1 = __importDefault(require("../models/products"));
// export async function readProducts(id?: string) {
//   let data: Products[];
//   if (id) {
//     data = await Products.findAll({ where: { id: id } });
//   } else {
//     data = await Products.findAll();
//   }
//   let result = {
//     data,
//   };
//   if (!result.data || !result.data.length || result.data.length === 0) {
//     const products = [
//         {
//             name: "drone 55",
//             quantity :  5 ,
//             description: "el producto de novedad",
//             img : "bjnojnjdob",
//             price : 20.00,
//             rating : 4,
//             Marca: "LG",
//             category_id: "drones"
//         }
//     ];
//     let i = 0;
//     while (i < products.length) {
//       await Products.create(products[i]);
//       i++;
//     }
//     data = await Products.findAll();
//     result = {
//       data,
//     };
//   }
//   return result;
// }
const readProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("here4");
    const products = [
        {
            name: "Smartphones 73829",
            quantity: 5,
            description: "El último modelo de smartphone de alta gama",
            img: "fgdhfghgfh",
            price: 765.89,
            rating: 3,
            Marca: "DELL",
            category_id: 1
        },
        {
            name: "Televisions 32381",
            quantity: 8,
            description: "Televisor inteligente de última generación",
            img: "ertyyhhg",
            price: 1250.75,
            rating: 4,
            Marca: "PHILIPS",
            category_id: 2
        },
        {
            name: "Computers 45723",
            quantity: 3,
            description: "Portátil para trabajo y entretenimiento",
            img: "rtttyuio",
            price: 899.99,
            rating: 5,
            Marca: "XIAOMI",
            category_id: 3
        },
        {
            name: "Game Consoles 90678",
            quantity: 2,
            description: "Consola de videojuegos de última generación",
            img: "poikmnbv",
            price: 599.50,
            rating: 4,
            Marca: "HUAWEI",
            category_id: 4
        },
        {
            name: "Camaras 65819",
            quantity: 4,
            description: "Cámara fotográfica profesional",
            img: "lkjhgfd",
            price: 1599.99,
            rating: 2,
            Marca: "LG",
            category_id: 5
        },
        {
            name: "Smart Watches 44286",
            quantity: 6,
            description: "Reloj inteligente de alta calidad",
            img: "qwertyui",
            price: 399.99,
            rating: 3,
            Marca: "SAMSUNG",
            category_id: 6
        },
        {
            name: "Speakers 55937",
            quantity: 10,
            description: "Altavoces inalámbricos con excelente calidad de sonido",
            img: "asdffggh",
            price: 299.99,
            rating: 4,
            Marca: "LOGITECH",
            category_id: 7
        },
        {
            name: "Drones 27790",
            quantity: 7,
            description: "Drone con cámara HD y control remoto",
            img: "zxcvbnmm",
            price: 899.50,
            rating: 5,
            Marca: "NOBLEX",
            category_id: 8
        },
        {
            name: "Headphones 16387",
            quantity: 12,
            description: "Auriculares inalámbricos con cancelación de ruido",
            img: "jhgfdfgh",
            price: 199.99,
            rating: 2,
            Marca: "NOKIA",
            category_id: 9
        },
        {
            name: "Smartphones 21456",
            quantity: 6,
            description: "Smartphone con pantalla OLED y cámara de alta resolución",
            img: "yuiopasd",
            price: 899.99,
            rating: 4,
            Marca: "HP",
            category_id: 1
        },
        {
            name: "Televisions 82375",
            quantity: 4,
            description: "Televisor 4K con HDR y Smart TV",
            img: "gfhjkmnn",
            price: 1200.00,
            rating: 5,
            Marca: "ELECTROLUX",
            category_id: 2
        },
        {
            name: "Computers 97532",
            quantity: 2,
            description: "Ordenador de sobremesa con procesador potente y gráficos dedicados",
            img: "qwertyuiop",
            price: 1499.99,
            rating: 3,
            Marca: "AMD",
            category_id: 3
        },
        {
            name: "Game Consoles 67349",
            quantity: 1,
            description: "Consola portátil con pantalla táctil y juegos preinstalados",
            img: "asdfghjkl",
            price: 299.50,
            rating: 4,
            Marca: "BGH",
            category_id: 4
        },
        {
            name: "Camaras 35546",
            quantity: 9,
            description: "Cámara deportiva con carcasa resistente al agua y Wi-Fi integrado",
            img: "zxcvbnmlk",
            price: 199.99,
            rating: 4,
            Marca: "PHILCO",
            category_id: 5
        },
        {
            name: "Smart Watches 74782",
            quantity: 3,
            description: "Reloj inteligente con GPS y monitor de frecuencia cardíaca",
            img: "poiuytre",
            price: 349.99,
            rating: 3,
            Marca: "DELL",
            category_id: 6
        },
        {
            name: "Speakers 12459",
            quantity: 7,
            description: "Altavoces Bluetooth portátiles con micrófono incorporado",
            img: "mnbvcxza",
            price: 99.99,
            rating: 5,
            Marca: "SONY",
            category_id: 7
        },
        {
            name: "Drones 96572",
            quantity: 5,
            description: "Drone plegable con cámara 4K y control remoto con pantalla",
            img: "lkjhgfdsa",
            price: 1299.00,
            rating: 4,
            Marca: "LENOVO",
            category_id: 8
        },
        {
            name: "Headphones 53761",
            quantity: 8,
            description: "Auriculares inalámbricos con cancelación de ruido y asistente de voz",
            img: "zxcvbnm",
            price: 249.99,
            rating: 4,
            Marca: "HUAWEI",
            category_id: 9
        }
    ];
    let i = 0;
    while (i < 18) {
        yield products_1.default.create(products[i]);
        i++;
    }
    const produc = yield products_1.default.findAll();
    res.status(200).json(produc);
});
exports.readProducts = readProducts;
