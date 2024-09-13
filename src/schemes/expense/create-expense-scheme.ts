import { z } from "zod";

export const createExpenseScheme = z.object({
  amount: z.coerce.number().positive(),
  purpose: z.string().min(10),
});

export type CreateExpenseScheme = z.infer<typeof createExpenseScheme>;
