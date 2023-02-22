import { User } from "../models/User";

export const getUserById = async (id: string) => {
  return await User.findOne({ where: { id: id } });
};

export const toLogin = async (email: string) => {
  return await User.findOne({ where: { email: email } });
};

export const toRegister = async (user: any) => {
  const [createdUser, created] = await User.findOrCreate({
    where: {
      email: user.email,
    },
    defaults: user,
  });

  if (!created) {
    throw new Error("User already exists 👀");
  }

  return createdUser;
};
