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
//              Marca: "LG",
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

export const readProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const products = [
    {
      name: "Samsung Galaxy Note 20 Ultra 5G",
      quantity: 5,
      deleted: true,
      description: "El último modelo de smartphone de alta gama",
      img: "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/Samsung-galaxy-s20-ultra_18d96eeb-331c-43c7-b338-871d301f5cf5_700x.png?v=1621301850",
      price: 765.89,
      rating: 3,
      Marca: 14,
      category_id: 1,
    },

    {
      name: "Smart TV LED 4K UHD",
      quantity: 8,
      description: "Televisor inteligente de última generación",
      img: "https://images.philips.com/is/image/PhilipsConsumer/55PUT6794_57-IMS-es_CO?$jpglarge$&wid=1250",
      price: 1250.75,
      rating: 4,
      Marca: 2,
      category_id: 2,
    },

    {
      name: "Acer Aspire 3 Intel Celeron",
      quantity: 3,
      description: "Portátil para trabajo y entretenimiento",
      img: "https://liquimarcas.com/wp-content/uploads/2022/08/Portatil-acer-aspire-3-core-i3-A315-34.jpg",
      price: 899.99,
      rating: 5,
      Marca: 1,
      category_id: 3,
    },

    {
      name: "PlayStation 5",
      quantity: 2,
      description: "Consola de videojuegos de última generación", 
      img: "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
      price: 599.5,
      rating: 4,
      Marca: 4,
      category_id: 4,
    },

    {
      name: "BGH EOS R6",
      quantity: 4,
      description: "Cámara fotográfica profesional",
      img: "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 1599.99,
      rating: 2,
      Marca:2,
      category_id: 5,
    },

    {
      name: "Lenovo Watch Series 7",
      quantity: 6,
      description: "Reloj inteligente de alta calidad",
      img: "https://http2.mlstatic.com/D_NQ_NP_854092-MLA51210865767_082022-O.webp",
      price: 399.99,
      rating: 3,
      Marca: 7,
      category_id: 6,
    },

    {
      name: "Noblex SoundLink Revolve+",
      quantity: 10,
      description: "Altavoces inalámbricos con excelente calidad de sonido",
      img: "https://http2.mlstatic.com/D_NQ_NP_694138-MLA53285895231_012023-O.webp",
      price: 299.99,
      rating: 4,
      Marca:10,
      category_id: 7,
    },

    {
      name: "Electrolux Mavic 2 Pro",
      quantity: 7,
      description: "Drone con cámara HD y control remoto",
      img: "https://http2.mlstatic.com/D_NQ_NP_681554-MLA51055415459_082022-O.webp",
      price: 899.5,
      rating: 5,
      Marca: 4,
      category_id: 8,
    },

    {
      name: "Sony WH-1000XM4",
      quantity: 12,
      description: "Auriculares inalámbricos con cancelación de ruido",
      img: "https://cleeraudio.com/wp-content/uploads/2021/10/ALPHA-ST-Gallery-Image-2.webp",
      price: 199.99,
      rating: 2,
      Marca: 15,
      category_id: 9,
    },

    {
      name: "Samsung Galaxy S22 Ultra 5G",
      quantity: 6,
      description: "Smartphone con pantalla OLED y cámara de alta resolución",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_687089-MLA52140335784_102022-F.webp",
      price: 899.99,
      rating: 4,
      Marca: 14,
      category_id: 1,
    },

    {
      name: "LG CX OLED TV",
      quantity: 4,
      description: "Televisor 4K con HDR y Smart TV",
      img: "https://http2.mlstatic.com/D_NQ_NP_855774-MLA52220683915_102022-O.webp",
      price: 1200.0,
      rating: 5,
      Marca: 8,
      category_id: 2,
    },

    {
      name: "ASUS ROG Strix Scar 17",
      quantity: 2,
      description:
        "Ordenador de sobremesa con procesador potente y gráficos dedicados",
      img: "https://http2.mlstatic.com/D_NQ_NP_792906-MLA53016994903_122022-O.webp",
      price: 1499.99,
      rating: 3,
      Marca: 1,
      category_id: 3,
    },

    {
      name: "Noblex Switch",
      quantity: 1,
      description:
        "Consola portátil con pantalla táctil y juegos preinstalados",
      img: "https://http2.mlstatic.com/D_NQ_NP_627149-MLA44484230438_012021-O.webp",
      price: 299.5,
      rating: 4,
      Marca: 10,
      category_id: 4,
    },

    {
      name: "Nokia Z6 II",
      quantity: 9,
      description:
        "Cámara deportiva con carcasa resistente al agua y Wi-Fi integrado",
      img: "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 199.99,
      rating: 4,
      Marca: 11,
      category_id: 5,
    },

    {
      name: "Samsung Galaxy Watch4",
      quantity: 3,
      description: "Reloj inteligente con GPS y monitor de frecuencia cardíaca",
      img: "https://http2.mlstatic.com/D_NQ_NP_978328-MLA46879861883_072021-O.webp",
      price: 349.99,
      rating: 3,
      Marca: 14,
      category_id: 6,
    },

    {
      name: "Noblex SoundTouch 10",
      quantity: 7,
      description: "Altavoces Bluetooth portátiles con micrófono incorporado",
      img: "https://image.made-in-china.com/2f0j00SiIWVlKCfFGL/Gadgets-2022-Innovative-Mini-LED-Bluetooth-Speaker-CE-FCC-RoHS-Wireless-Speaker-Ipx7-Waterproof-Bluetooth-Shower-Speaker.webp",
      price: 99.99,
      rating: 5,
      Marca: 10,
      category_id: 7,
    },

    {
      name: "Parrot Bebop 2 Power",
      quantity: 5,
      description: "Drone plegable con cámara 4K y control remoto con pantalla",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_877421-MLA51321901732_082022-V.webp",
      price: 1299.0,
      rating: 4,
      Marca: 8,
      category_id: 8,
    },

    {
      name: "Nokia WH-1000XM4",
      quantity: 8,
      description:
        "Auriculares inalámbricos con cancelación de ruido y asistente de voz",
      img: "https://cdn.trendhunterstatic.com/phpthumbnails/290/290418/290418_1_800.jpeg?auto=webp",
      price: 249.99,
      rating: 4,
      Marca: 11,
      category_id: 9,
    },

    {
      name: "Huawei Note 20 Ultra 5G",
      quantity: 5,
      description: "El último modelo de smartphone de alta gama",
      img: "https://http2.mlstatic.com/D_NQ_NP_704970-MCO31534366187_072019-O.webp",
      price: 765.89,
      rating: 3,
      Marca:6,
      category_id: 1,
    },

    {
      name: "TV HP LED 4K UHD",
      quantity: 8,
      description: "Televisor inteligente de última generación",
      img: "https://image.made-in-china.com/2f0j00QVZWOKSjwyUB/17-19-22-24-26-32-Inch-Plasma-TV-LED-Smart-Televisions-Solar-12V-DC-TV.webp",
      price: 1250.75,
      rating: 4,
      Marca: 8,
      category_id: 2,
    },

    {
      name: "Dell Aspire 3 Celeron",
      quantity: 3,
      description: "Portátil para trabajo y entretenimiento",
      img: "https://www.apcomputadores.com/wp-content/uploads/portatil-dell-vostro-yg53w-vostro-3405-14%E2%80%B3-amd-ryzen-5-3450u-8gb-ram-256gb-ssd.jpg.webp",
      price: 899.99,
      rating: 5,
      Marca: 3,
      category_id: 3,
    },

    {
      name: "PlayStation 4",
      quantity: 2,
      description: "Consola de videojuegos de última generación",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_798586-MLA40076060236_122019-V.webp",
      price: 599.5,
      rating: 4,
      Marca: 9,
      category_id: 4,
    },

    {
      name: "BGH EOS R6",
      quantity: 4,
      description: "Cámara fotográfica profesional",
      img: "https://tauretcomputadores.com/images/products/Product_202211051311561079377120.BRIO-500-5.webp",
      price: 1599.99,
      rating: 2,
      Marca: 2,
      category_id: 5,
    },

    {
      name: "Watch Master 7",
      quantity: 6,
      description: "Reloj inteligente de alta calidad",
      img: "https://teranautas.es/wp-content/uploads/Apple-lanza-watchOS-87-para-Apple-Watch.webp.webp",
      price: 399.99,
      rating: 3,
      Marca: 4,
      category_id: 6,
    },

    {
      name: "SoundLink Revolve+ 630",
      quantity: 10,
      description: "Altavoces inalámbricos con excelente calidad de sonido",
      img: "https://www.popsci.com/uploads/2021/11/12/fluance-ai41-best-speakers.jpg?auto=webp",
      price: 299.99,
      rating: 4,
      Marca: 5,
      category_id: 7,
    },

    {
      name: "Logitech Mavic 7 Pro",
      quantity: 7,
      description: "Drone con cámara HD y control remoto",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_877421-MLA51321901732_082022-V.webp",
      price: 899.5,
      rating: 5,
      Marca: 6,
      category_id: 8,
    },

    {
      name: "Sony PT-1070XM4",
      quantity: 12,
      description: "Auriculares inalámbricos con cancelación de ruido",
      img: "https://www.apcomputadores.com/wp-content/uploads/2020/08/stingerps4-1.jpg.webp",
      price: 199.99,
      rating: 2,
      Marca: 15,
      category_id: 9,
    },
    {
      name: "Iphone 12 XPRO",
      quantity: 5,
      description: "El último modelo de smartphone de alta gama",
      img: "https://www.alemaniacell.com/uploads/ximagen-principal16231-1-1614276022.webp.pagespeed.ic.1W18gSXm_y.webp",
      price: 765.89,
      rating: 3,
      Marca:6,
      category_id: 1,
    },

    {
      name: "Televisor HP ULTRA k MEGA PRO",
      quantity: 8,
      description: "Televisor inteligente de última generación",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_695235-MLA44405482025_122020-V.webp",
      price: 1250.75,
      rating: 4,
      Marca: 8,
      category_id: 2,
    },

    {
      name: "Asus Legion 3 MAX",
      quantity: 3,
      description: "Portátil para trabajo y entretenimiento",
      img: "https://http2.mlstatic.com/D_NQ_NP_608219-MCO46015579129_052021-O.webp",
      price: 899.99,
      rating: 5,
      Marca: 3,
      category_id: 3,
    },

    {
      name: "Nintendo Switch",
      quantity: 2,
      description: "Consola de videojuegos de última generación",
      img: "https://www.tauretcomputadores.com/images/products/Product_20221010164555832571325.Azul-1.webp",
      price: 599.5,
      rating: 4,
      Marca: 15,
      category_id: 4,
    },

    {
      name: "Canon R6",
      quantity: 4,
      description: "Cámara fotográfica profesional",
      img: "https://http2.mlstatic.com/D_NQ_NP_759013-MLA45730771605_042021-O.webp",
      price: 1599.99,
      rating: 2,
      Marca: 4,
      category_id: 5,
    },

    {
      name: "Watch Ultra Sonic",
      quantity: 6,
      description: "Reloj inteligente de alta calidad",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_684284-MLA46397778472_062021-V.webp",
      price: 399.99,
      rating: 3,
      Marca: 4,
      category_id: 6,
    },

    {
      name: "Altavoz Estelar Panic",
      quantity: 10,
      description: "Altavoces inalámbricos con excelente calidad de sonido",
      img: "https://http2.mlstatic.com/D_NQ_NP_904923-MCO49170387048_022022-O.webp",
      price: 299.99,
      rating: 4,
      Marca: 5,
      category_id: 7,
    },

    {
      name: "Super drone 7800X",
      quantity: 7,
      description: "Drone con cámara HD y control remoto",
      img: "hhttps://http2.mlstatic.com/D_NQ_NP_739978-MLA48944084291_012022-O.webp",
      price: 899.5,
      rating: 5,
      Marca: 6,
      category_id: 8,
    },

    {
      name: "Lenovo Fantastic 52",
      quantity: 12,
      description: "Auriculares inalámbricos con cancelación de ruido",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_696927-MCO50999461091_082022-V.webp",
      price: 199.99,
      rating: 2,
      Marca: 7,
      category_id: 9,
    },
    
  ];

  let i = 0;

  while (i < 18) {
    await Products.create(products[i]);
    i++;
  }

  const produc = await Products.findAll();
  res.status(200).json(produc);
};
