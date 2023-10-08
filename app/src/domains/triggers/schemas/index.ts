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

export const triggerTypeMap: Record<
  TriggerType,
  { short: string; long: string }
> = {
  AssignedProfile: {
    short: "Assigned Profile",
    long: "When a profile is assigned to a visitor",
  },
  StatusChange: {
    short: "Status Change",
    long: "When a visitor's status changes",
  },
  AtCertainTime: { short: "At Certain Time", long: "At a certain time of day" },
} as const;

export const Trigger = z.object({
  id: z.string(),
  profile: profileSchema.optional(),
  active: z.boolean(),
  type: TriggerType,
  actions: z.array(ActionType).min(1),
});
export type Trigger = z.infer<typeof Trigger>;
