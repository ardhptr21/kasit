"use server";

import { ActionError } from "@/exceptions/action-exceptions";
import { authActionClient } from "@/lib/safe-action";
import {
  createTransaction,
  isTransactionExistsByDate,
} from "@/repositories/transactions";
import { createTransactionSceme } from "@/schemes/transaction/create-transaction-scheme";
import { UserRole } from "@prisma/client";
import { z } from "zod";

export const createTransactionAction = authActionClient([UserRole.ADMIN])
  .schema(createTransactionSceme)
  .bindArgsSchemas<[userId: z.ZodString]>([z.string()])
  .action(async ({ parsedInput, bindArgsParsedInputs: [userId] }) => {
    try {
      const exists = await isTransactionExistsByDate(
        new Date(parsedInput.createdAt)
      );
      if (exists)
        throw new ActionError("Transaction already exists for this month");

      const data = await createTransaction(userId, parsedInput);
      return data;
    } catch (e) {
      if (e instanceof ActionError) throw e;
      throw new Error("Something went wrong, please try again");
    }
  });
