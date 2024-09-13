import db from "@/lib/db";

export const calculateIncomeAndExpense = async (date?: Date) => {
  if (!date) {
    const [transaction, expense] = await Promise.all([
      db.transaction.aggregate({
        _sum: { amount: true },
      }),
      db.expense.aggregate({
        _sum: { amount: true },
      }),
    ]);

    return {
      income: transaction._sum.amount,
      expense: expense._sum.amount,
      count: -1,
    };
  }

  const start = new Date(date);
  const end = new Date(date.setMonth(date.getMonth() + 1));

  const [transaction, expense] = await Promise.all([
    db.transaction.aggregate({
      where: {
        createdAt: { gte: start, lt: end },
      },
      _sum: { amount: true },
      _count: { amount: true },
    }),
    db.expense.aggregate({
      where: { createdAt: { gte: start, lt: end } },
      _sum: { amount: true },
    }),
  ]);

  return {
    income: transaction._sum.amount,
    expense: expense._sum.amount,
    count: transaction._count.amount,
  };
};
