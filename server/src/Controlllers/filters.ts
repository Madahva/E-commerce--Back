import { Request, Response } from "express";
import Products from "../models/products";
import Category from "../models/category";
import { Op } from 'sequelize';

export const filterProductsByPrice = async (req: Request, res: Response): Promise<void> => {
    const { min, max } = req.body;
    
    try {
      const products = await Products.findAll({
        where: {
          price: {
            [Op.between]: [Number(min), Number(max)]
          }
        }
      });
        res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
};

export const filterProductsByBrand = async (req: Request, res: Response): Promise<void> => {
    const { Marca} = req.body;
    try{
        const products = await Products.findAll({
            where: {
              Marca: {
                [Op.like]: `%${Marca}%`
              }
            }
        });
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
}

export const filterProductsByCategory = async (req: Request, res: Response): Promise<void> => {
    const { category_id} = req.body;
    try {
        const products = await Products.findAll({
          where: {
            category_id: category_id 
          }
        });
      
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
      }
}

export const filterProductsByRating = async (req: Request, res: Response): Promise<void> => {
    const {rating} = req.body;
    try{
        const products = await Products.findAll({
            where: {
              rating: {
                [Op.like]: `%${rating}%`
              }
            }
        });
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
}

  
// export const filterProductsByBrand = async (req: Request, res: Response): Promise<void> => {
//     const { brand } = req.body;
//     try {
//     const products = await Products.findAll();
//     // const categories = await Category.findAll();
//     // Obtener la marca desde el query params
//     const brandProduct = brand;
    
//     if (brand === "AMD") {
//         // Obtener todos los productos y filtrar por marca
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         // const filteredCategories = categories.filter((b) => b.brand === brandProduct);
//         // Devolver los productos filtrados
//         res.json(filteredProducts);
//         // res.json(filteredCategories);
//     } else if (brand === "BGH") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "DELL") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "ELECTROLUX") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "HP") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "HUAWEI") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "LENOVO") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "LG") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "LOGITECH") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "NOBLEX") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "NOKIA") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "PHILCO") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "PHILIPS") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "SAMSUNG") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "SONY") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else if (brand === "XIAOMI") {
//         const filteredProducts = products.filter((b) => b.brand === brandProduct);
//         res.json(filteredProducts);
//     } else {
//         console.log("Nope");
//         res.status(400).json({ message: "Invalid product by brand" });
//     }
//     } catch (error) {
//       console.log("Entroerr");
//       console.log(error);
//       res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const filterProductsByCategory = async (req: Request, res: Response): Promise<void> => {
//     const { category } = req.body;
//     try {
//     const products = await Products.findAll();
//     // Obtener la categoria desde el query params
//     const categoryProduct = category;
    
//     if (category === "Smartphones") {
//         // Obtener todos los productos y filtrar por categoria
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         // Devolver los productos filtrados
//         res.json(filteredProducts);
//     } else if (category === "Televisions") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else if (category === "Computers") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else if (category === "Game Consoles") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else if (category === "Cameras") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else if (category === "Smart Watches") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else if (category === "Speakers") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else if (category === "Drones") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else if (category === "Headphones") {
//         const filteredProducts = products.filter((c) => c.category === categoryProduct);
//         res.json(filteredProducts);
//     } else {
//         console.log("Nope");
//         res.status(400).json({ message: "Invalid product by category" });
//     }
//     } catch (error) {
//       console.log("Entroerr");
//       console.log(error);
//       res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const filterProductsByMostRelevant = async (req: Request, res: Response): Promise<void> => {
//     const { min, max , rating} = req.body;
//     try {
//       const products = await Products.findAll();
//       const lowerPrice = min;
//       const higherPrice = max;
//       const favorites = rating ;
//       if (min < 5000.00 && rating === 5) {
//         // Obtener todos los productos y filtrar por precio
//         const filteredProducts = products.filter((p) => p.price <= lowerPrice && p.rating === favorites);
//         // Devolver los productos filtrados
//         res.json(filteredProducts);
//       } else if (max > 5000.00 && rating === 5) {
//         const filteredProducts = products.filter((p) => p.price >= higherPrice && p.rating === favorites);
//         // Devolver los productos filtrados
//         res.json(filteredProducts);
//       } else {
//         console.log("Nope");
//         res.status(400).json({ message: "Invalid price range" });
//       }
//     } catch (error) {
//       console.log("Entroerr");
//       console.log(error);
//       res.status(500).json({ message: "Internal server error" });
//     }
// };