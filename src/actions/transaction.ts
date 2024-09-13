"use server";

import { authActionClient } from "@/lib/safe-action";
import { createTransaction } from "@/repositories/transactions";
import { createTransactionSceme } from "@/schemes/transaction/create-transaction-scheme";
import { UserRole } from "@prisma/client";
import { z } from "zod";

export const createTransactionAction = authActionClient([UserRole.ADMIN])
  .schema(createTransactionSceme)
  .bindArgsSchemas<[userId: z.ZodString]>([z.string()])
  .action(async ({ parsedInput, bindArgsParsedInputs: [userId] }) => {
    try {
      const data = await createTransaction(userId, parsedInput);
      return data;
    } catch (e) {
      throw new Error("Something went wrong, please try again");
    }
  });
