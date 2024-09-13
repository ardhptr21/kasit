"use server";

import { authActionClient } from "@/lib/safe-action";
import { createExpense } from "@/repositories/expenses";
import { createExpenseScheme } from "@/schemes/expense/create-expense-scheme";
import { UserRole } from "@prisma/client";

export const createExpenseAction = authActionClient([UserRole.ADMIN])
  .schema(createExpenseScheme)
  .action(async ({ parsedInput }) => {
    try {
      const data = await createExpense(parsedInput);
      return data;
    } catch (e) {
      throw new Error("Something went wrong, please try again");
    }
  });
