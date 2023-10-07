import { z } from "zod";

export const profileSchema = z.object({
  id: z.number(),
  name: z.string(),
});
