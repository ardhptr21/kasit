import { z } from "zod";

export const saweriaHookScheme = z.object({
  version: z.string(),
  created_at: z.string(),
  id: z.string(),
  type: z.string(),
  amount_raw: z.number().positive(),
  cut: z.number().positive(),
  donator_name: z.string(),
  donator_email: z.string().email(),
  donator_is_user: z.boolean(),
  message: z.string(),
  etc: z.object({
    amount_to_display: z.number().positive(),
  }),
});

export type SaweriaHookSchema = z.infer<typeof saweriaHookScheme>;
