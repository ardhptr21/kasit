import db from "@/lib/db";
import { CreateUserScheme } from "@/schemes/user/create-user-scheme";

export const createUser = async (payload: CreateUserScheme) => {
    return await db.user.create({
      data:payload
    })
};

export const findUserByNRP = async (nrp: string) => {
  return await db.user.findUnique({
    where: { nrp },
  });
};

export const findUserByID = async (id: string) => {
  return await db.user.findUnique({
    where: { id },
  });
};
