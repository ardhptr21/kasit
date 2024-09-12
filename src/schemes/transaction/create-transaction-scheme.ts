import { create } from "domain";
import { z } from "zod";

export const createTransaction = z.object({
    amount: z.coerce.number().min(0),
    type: z.enum(["CASH", "SAWERIA"]),
    createdAt: z.string().datetime(),
})

export type CreateTransaction = z.infer<typeof createTransaction>;