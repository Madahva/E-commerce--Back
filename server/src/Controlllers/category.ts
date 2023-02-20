import { Request, Response } from "express";


export const crearcate = async (req : Request , res : Response) : Promise<void>=>{
try{
    
}catch(errorr){
    res.status(500).json({ error: "Server error" });
}
}