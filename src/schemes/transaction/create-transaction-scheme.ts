import { z } from "zod";

export const createTransactionSceme = z.object({
  amount: z.coerce.number().min(0),
  type: z.enum(["CASH", "SAWERIA"]).default("CASH"),
  createdAt: z.string().date(),
});

export type CreateTransactionScheme = z.infer<typeof createTransactionSceme>;
