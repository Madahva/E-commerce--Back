import { Request, Response } from "express";
import Products from "../models/products";

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
export const readProducts = async (req: Request, res: Response): Promise<void> => {

    console.log("here4")
    const products = [
        {
            name: "Smartphones 73829",
            quantity: 5,
            description: "El último modelo de smartphone de alta gama",
            img: "https://s03.s3c.es/imag/_v0/770x420/2/6/e/Motorola-One-Black-Laydown-combo-1.png",
            price: 765.89,
            rating: 3,
            Marca: "DELL",
            category_id: 1
        },

        {
            name: "Televisions 32381",
            quantity: 8,
            description: "Televisor inteligente de última generación",
            img: "https://s03.s3c.es/imag/_v0/770x420/2/6/e/Motorola-One-Black-Laydown-combo-1.png",
            price: 1250.75,
            rating: 4,
            Marca: "PHILIPS",
            category_id: 2
        },

        {
            name: "Computers 45723",
            quantity: 3,
            description: "Portátil para trabajo y entretenimiento",
            img: "https://s03.s3c.es/imag/_v0/770x420/2/6/e/Motorola-One-Black-Laydown-combo-1.png",
            price: 899.99,
            rating: 5,
            Marca: "XIAOMI",
            category_id: 3
        },

        {
            name: "Game Consoles 90678",
            quantity: 2,
            description: "Consola de videojuegos de última generación",
            img: "https://www.semana.com/resizer/o3ERhC_Q12hloETcVM_dB-87ejI=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/L7WJ7PYATJG63JNM2A5OOHIEA4.jpg",
            price: 599.50,
            rating: 4,
            Marca: "HUAWEI",
            category_id: 4
        },

        {
            name: "Camaras 65819",
            quantity: 4,
            description: "Cámara fotográfica profesional",
            img: "https://www.semana.com/resizer/o3ERhC_Q12hloETcVM_dB-87ejI=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/L7WJ7PYATJG63JNM2A5OOHIEA4.jpg",
            price: 1599.99,
            rating: 2,
            Marca: "LG",
            category_id: 5
        },

        {
            name: "Smart Watches 44286",
            quantity: 6,
            description: "Reloj inteligente de alta calidad",
            img: "https://mobomx.vteximg.com.br/arquivos/ids/201427/35.png?v=638116545514700000",
            price: 399.99,
            rating: 3,
            Marca: "SAMSUNG",
            category_id: 6
        },

        {
            name: "Speakers 55937",
            quantity: 10,
            description: "Altavoces inalámbricos con excelente calidad de sonido",
            img: "https://mobomx.vteximg.com.br/arquivos/ids/201427/35.png?v=638116545514700000",
            price: 299.99,
            rating: 4,
            Marca: "LOGITECH",
            category_id: 7
        },

        {
            name: "Drones 27790",
            quantity: 7,
            description: "Drone con cámara HD y control remoto",
            img: "https://mobomx.vteximg.com.br/arquivos/ids/201427/35.png?v=638116545514700000",
            price: 899.50,
            rating: 5,
            Marca: "NOBLEX",
            category_id: 8
        },

        {
            name: "Headphones 16387",
            quantity: 12,
            description: "Auriculares inalámbricos con cancelación de ruido",
            img: "https://mobomx.vteximg.com.br/arquivos/ids/201427/35.png?v=638116545514700000",
            price: 199.99,
            rating: 2,
            Marca: "NOKIA",
            category_id: 9
        },

        {
            name: "Smartphones 21456",
            quantity: 6,
            description: "Smartphone con pantalla OLED y cámara de alta resolución",
            img: "https://mobomx.vteximg.com.br/arquivos/ids/201427/35.png?v=638116545514700000",
            price: 899.99,
            rating: 4,
            Marca: "HP",
            category_id: 1
        },
                
        {
            name: "Televisions 82375",
            quantity: 4,
            description: "Televisor 4K con HDR y Smart TV",
            img: "https://mobomx.vteximg.com.br/arquivos/ids/201427/35.png?v=638116545514700000",
            price: 1200.00,
            rating: 5,
            Marca: "ELECTROLUX",
            category_id: 2
        },
                
        {
            name: "Computers 97532",
            quantity: 2,
            description: "Ordenador de sobremesa con procesador potente y gráficos dedicados",
            img: "https://i.pinimg.com/550x/74/86/5a/74865a124c900055df8d11f00637c86d.jpg",
            price: 1499.99,
            rating: 3,
            Marca: "AMD",
            category_id: 3
        },
                
        {
            name: "Game Consoles 67349",
            quantity: 1,
            description: "Consola portátil con pantalla táctil y juegos preinstalados",
            img: "asdfhttps://i.pinimg.com/550x/74/86/5a/74865a124c900055df8d11f00637c86d.jpgghjkl",
            price: 299.50,
            rating: 4,
            Marca: "BGH",
            category_id: 4
        },
                
        {
            name: "Camaras 35546",
            quantity: 9,
            description: "Cámara deportiva con carcasa resistente al agua y Wi-Fi integrado",
            img: "https://i.pinimg.com/550x/74/86/5a/74865a124c900055df8d11f00637c86d.jpg",
            price: 199.99,
            rating: 4,
            Marca: "PHILCO",
            category_id: 5
        },
                
        {
            name: "Smart Watches 74782",
            quantity: 3,
            description: "Reloj inteligente con GPS y monitor de frecuencia cardíaca",
            img: "https://i.pinimg.com/550x/74/86/5a/74865a124c900055df8d11f00637c86d.jpg",
            price: 349.99,
            rating: 3,
            Marca: "DELL",
            category_id: 6
        },
                
        {
            name: "Speakers 12459",
            quantity: 7,
            description: "Altavoces Bluetooth portátiles con micrófono incorporado",
            img: "https://i.pinimg.com/550x/74/86/5a/74865a124c900055df8d11f00637c86d.jpg",
            price: 99.99,
            rating: 5,
            Marca: "SONY",
            category_id: 7
        },
                
        {
            name: "Drones 96572",
            quantity: 5,
            description: "Drone plegable con cámara 4K y control remoto con pantalla",
            img: "https://i.pinimg.com/550x/74/86/5a/74865a124c900055df8d11f00637c86d.jpg",
            price: 1299.00,
            rating: 4,
            Marca: "LENOVO",
            category_id: 8
        },
                
        {
            name: "Headphones 53761",
            quantity: 8,
            description: "Auriculares inalámbricos con cancelación de ruido y asistente de voz",
            img: "https://i.pinimg.com/550x/74/86/5a/74865a124c900055df8d11f00637c86d.jpg",
            price: 249.99,
            rating: 4,
            Marca: "HUAWEI",
            category_id: 9
        }

    ];

    let i = 0;

    while (i < 18) {
        await Products.create(products[i]);
        i++;
    }

    const produc = await Products.findAll();
    res.status(200).json(produc);
}