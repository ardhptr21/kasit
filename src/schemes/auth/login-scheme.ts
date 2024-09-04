import { z } from "zod";

export const loginScheme = z.object({
  nrp: z.string().length(10).regex(/^\d+$/, "NRP must be a number"),
  password: z.string().min(6),
});

export type LoginScheme = z.infer<typeof loginScheme>;
