import { User } from "../models/User";

export const getUsers = async (id:string) => {

 return await User.findOne({ where: { id: id } })
}

