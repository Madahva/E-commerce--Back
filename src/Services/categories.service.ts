import { Request, Response } from "express";
import Category from "../models/category";

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

export const readCategory = async (req: Request, res: Response): Promise<void> => {

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
      await Category.create(category[i]);
      i++;
    }

    const categ = await Category.findAll();
    res.status(200).json(categ);
}

export async function here() {
    
}
  
