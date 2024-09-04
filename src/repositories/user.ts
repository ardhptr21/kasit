import db from "@/lib/db";

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
