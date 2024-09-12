import db from "@/lib/db";
import { CreateTransaction } from "@/schemes/transaction/create-transaction-scheme";


export const createTransaction = async (userId: string, payload: CreateTransaction) => {
    return await db.transaction.create({
        data: {
            userId: userId,
            ...payload,
        },
    });
};

export const findTransaction = async (date: Date) => {
    return await db.transaction.findMany({
        where: {
            createdAt:{
                gte: date,
            },
        },
    });
};