import db from "@/lib/db";
import { CreateTransactionScheme } from "@/schemes/transaction/create-transaction-scheme";

export const createTransaction = async (
  userId: string,
  payload: CreateTransactionScheme
) => {
  return await db.transaction.create({
    data: {
      userId: userId,
      ...payload,
      createdAt: new Date(payload.createdAt),
    },
  });
};

export const findTransaction = async (date: Date) => {
  return await db.transaction.findMany({
    where: {
      createdAt: {
        gte: date,
      },
    },
  });
};
