import { Request, Response } from "express";
import Brand from "../models/Brand";

export const readbrand = async (req: Request, res: Response): Promise<void> => {
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
    await Brand.create(category[i]);
    i++;
  }

  const categ = await Brand.findAll();
  res.status(200).json(categ);
};

export async function here() {}
