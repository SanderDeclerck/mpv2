import { z } from "zod";
import { profileSchema } from "@/domains/profiles/schemas";

export const ActionType = z.enum([
  "FreeYardLocation",
  "SendEmail",
  "PrintTicket",
]);
export type ActionType = z.infer<typeof ActionType>;
export const actionTypeMap: ActionType[] = [
  "FreeYardLocation",
  "SendEmail",
  "PrintTicket",
];

export const TriggerType = z.enum([
  "AssignedProfile",
  "StatusChange",
  "AtCertainTime",
]);
export type TriggerType = z.infer<typeof TriggerType>;

export const VisitorStatus = z.enum([
  "Blocked",
  "Checked in",
  "Expected",
  "Departed",
  "Waiting approval",
]);
export type VisitorStatus = z.infer<typeof VisitorStatus>;

export const BaseTrigger = z.object({
  id: z.string(),
  active: z.boolean(),
  type: TriggerType,
  actions: z.array(ActionType),
});
export type BaseTrigger = z.infer<typeof BaseTrigger>;

export const StatusChangeTrigger = BaseTrigger.merge(
  z.object({
    type: z.literal("StatusChange"),
    status: z.array(VisitorStatus).min(1).or(z.literal("all")),
  }),
);
export type StatusChangeTrigger = z.infer<typeof StatusChangeTrigger>;

export const AssignedProfileTrigger = BaseTrigger.extend({
  type: z.literal("AssignedProfile"),
  profiles: z.array(profileSchema).min(1).or(z.literal("all")),
});
export type AssignedProfileTrigger = z.infer<typeof AssignedProfileTrigger>;

export const AtCertainTimeTrigger = BaseTrigger.extend({
  type: z.literal("AtCertainTime"),
});

export const Trigger = z.discriminatedUnion("type", [
  StatusChangeTrigger,
  AssignedProfileTrigger,
  AtCertainTimeTrigger,
]);
export type Trigger = z.infer<typeof Trigger>;

// https://github.com/colinhacks/zod/discussions/1434
export const createTriggerOmitKeys = { id: true } as const;

export const CreateStatusChangeTrigger = StatusChangeTrigger.omit(
  createTriggerOmitKeys,
);
export type CreateStatusChangeTrigger = z.infer<
  typeof CreateStatusChangeTrigger
>;

export const CreateAssignedProfileTrigger = AssignedProfileTrigger.omit(
  createTriggerOmitKeys,
).extend({
  profiles: z.array(profileSchema.shape.id).min(1).or(z.literal("all")),
});
export type CreateAssignedProfileTrigger = z.infer<
  typeof CreateAssignedProfileTrigger
>;

export const CreateAtCertainTimeTrigger = AtCertainTimeTrigger.omit(
  createTriggerOmitKeys,
);
export type CreateAtCertainTimeTrigger = z.infer<
  typeof CreateAtCertainTimeTrigger
>;

export const CreateTrigger = z.discriminatedUnion("type", [
  CreateStatusChangeTrigger,
  CreateAssignedProfileTrigger,
  CreateAtCertainTimeTrigger,
]);
export type CreateTrigger = z.infer<typeof CreateTrigger>;

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

export const visitorStatusMap: VisitorStatus[] = [
  "Blocked",
  "Checked in",
  "Expected",
  "Departed",
  "Waiting approval",
];
