import { z } from "zod";

export const createTransactionSceme = z.object({
  amount: z.coerce.number().min(0),
  createdAt: z.string().date(),
});

export type CreateTransactionScheme = z.infer<typeof createTransactionSceme>;
