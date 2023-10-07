import { z } from "zod";
import { profileSchema } from "@/domains/profiles/schemas";

export const ActionType = z.enum([
  "FreeYardLocation",
  "SendEmail",
  "PrintTicket",
]);
export type ActionType = z.infer<typeof ActionType>;

export const TriggerType = z.enum([
  "AssignedProfile",
  "StatusChange",
  "AtCertainTime",
]);
export type TriggerType = z.infer<typeof TriggerType>;

export const triggerTypeMap: Record<TriggerType, string> = {
  AssignedProfile: "Assigned Profile",
  StatusChange: "Status Change",
  AtCertainTime: "At Certain Time",
} as const;

export const Trigger = z.object({
  id: z.string(),
  profile: profileSchema.optional(),
  active: z.boolean(),
  type: TriggerType,
  actions: z.array(ActionType),
});
export type Trigger = z.infer<typeof Trigger>;
