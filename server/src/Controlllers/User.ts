import { Request, Response } from "express";
import User from "../models/User";

export const getUser = async (req: Request, res: Response): Promise<void>=>{
try{
    const getuser =  await User.findAll()
    res.send(getuser)
}catch(error){
    res.status(402).send(error);
    console.log(error)
}
}