"use server";

import { actionClient } from "@/lib/safe-action";
import { createExpense } from "@/repositories/expenses";
import { createExpenseScheme } from "@/schemes/expense/create-expense-scheme";
export const createExpenseAction = actionClient
  .schema(createExpenseScheme)
  .action(async ({ parsedInput }) => {
    try {
      const data = await createExpense(parsedInput);
      return data;
    } catch (e) {
      throw new Error("Something went wrong, please try again");
    }
  });
