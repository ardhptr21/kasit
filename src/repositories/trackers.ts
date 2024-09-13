import db from "@/lib/db";

export const calculateIncomeAndExpense = async (date?: Date) => {
  if (!date) {
    const [transaction, expense] = await Promise.all([
      db.transaction.groupBy({
        by: ["type"],
        _sum: { amount: true },
      }),
      db.expense.aggregate({
        _sum: { amount: true },
      }),
    ]);

    const saweria = transaction.find((t) => t.type === "SAWERIA")?._sum.amount;
    const cash = transaction.find((t) => t.type === "CASH")?._sum.amount;

    return {
      income: {
        saweria,
        cash,
        all: (saweria || 0) + (cash || 0),
      },
      expense: expense._sum.amount,
      count: -1,
    };
  }

  const start = new Date(date);
  const end = new Date(date.setMonth(date.getMonth() + 1));

  const [transaction, expense] = await Promise.all([
    db.transaction.groupBy({
      by: ["type"],
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
  const saweria = transaction.find((t) => t.type === "SAWERIA");
  const cash = transaction.find((t) => t.type === "CASH");

  return {
    income: {
      saweria: saweria?._sum.amount,
      cash: cash?._sum.amount,
      all: (saweria?._sum.amount || 0) + (cash?._sum.amount || 0),
    },
    expense: expense._sum.amount,
    count: (saweria?._count.amount || 0) + (cash?._count.amount || 0),
  };
};
