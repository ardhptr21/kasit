import db from "@/lib/db";
import { CreateTransactionScheme } from "@/schemes/transaction/create-transaction-scheme";

export const isTransactionExistsByDate = async (userId: string, date: Date) => {
  const start = new Date(date);
  const end = new Date(date.setMonth(date.getMonth() + 1));
  const count = await db.transaction.count({
    where: {
      createdAt: { gte: start, lt: end },
      userId,
    },
  });
  return count > 0;
};

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

export const findTransactionsStrictWithDate = async ({
  date,
  search,
}: {
  date: Date;
  search?: string | null;
}) => {
  const start = new Date(date);
  const end = new Date(date.setMonth(date.getMonth() + 1));

  return await db.transaction.findMany({
    where: {
      createdAt: { gte: start, lt: end },
      user: { name: { contains: search || undefined, mode: "insensitive" } },
    },
    select: {
      id: true,
      amount: true,
      type: true,
      createdAt: true,
      user: { select: { name: true, nrp: true } },
    },
    orderBy: { user: { nrp: "asc" } },
  });
};
