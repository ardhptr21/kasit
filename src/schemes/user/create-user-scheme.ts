import { z } from "zod";

export const createUser = z.object({
    name: z.string().min(3),
    nrp: z.string().length(10).regex(/^\d+$/, "NRP must be a number"),
    password: z.string().min(6),
});

export type CreateUserScheme = z.infer<typeof createUser>;