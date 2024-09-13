import db from "@/lib/db";

export const findExpensesStrictWithDate = async (date: Date) => {
  const start = new Date(date);
  const end = new Date(date.setMonth(date.getMonth() + 1));

  return await db.expense.findMany({
    where: { createdAt: { gte: start, lt: end } },
    orderBy: { createdAt: "desc" },
  });
};
