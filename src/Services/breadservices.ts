import { Request, Response } from "express";
import Brand from "../models/Brand";

export const readbrand = async (req: Request, res: Response): Promise<void> => {
  const category = [
    {
      brand: "AMD",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "BGH",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "DELL",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "ElECTROLUX",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "HP",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "HUAWEI",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "LENOVO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "LG",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "LOGITECH",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "NOBLEX",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "NOKIA",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "PHILCO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "PHILIPS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "SAMSUNG",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "SONY",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
    {
      brand: "XIAOMI",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oZyrLrHnRiB_YJRESz2YnfnQweT9bx-Qrw&usqp=CAU",
    },
 
  ];

  let i = 0;

  while (i < 16) {
    await Brand.create(category[i]);
    i++;
  }

  const categ = await Brand.findAll();
  res.status(200).json(categ);
};

export async function here() {}
