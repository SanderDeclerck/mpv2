import z from "zod";

export const createVisitorGetResponse = z.object({
  query: z.object({
    name: z.string(),
  }),
});
