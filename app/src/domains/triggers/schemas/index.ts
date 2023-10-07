import { z } from "zod";
import { profileSchema } from "@/domains/profiles/schemas";

export const actionType = z.enum([
  "FreeYardLocation",
  "SendEmail",
  "PrintTicket",
]);
export const triggerType = z.enum([
  "AssignedProfile",
  "StatusChange",
  "AtCertainTime",
]);

export const triggerSchema = z.object({
  id: z.string(),
  profile: profileSchema.optional(),
  active: z.boolean(),
  type: triggerType,
  actions: z.array(actionType),
});
