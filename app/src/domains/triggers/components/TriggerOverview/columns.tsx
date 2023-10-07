import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { profileSchema } from "@/domains/profiles/schemas";

const actionType = z.enum(["FreeYardLocation", "SendEmail", "PrintTicket"]);
const triggerType = z.enum(["AssignedProfile", "StatusChange", "AtCertainTime"]);

const triggerSchema = z.object({
  id: z.string(),
  profile: profileSchema.optional(),
  active: z.boolean(),
  type: triggerType,
  actions: z.array(actionType),
});

type Trigger = z.infer<typeof triggerSchema>;

export const triggerColumns: ColumnDef<Trigger>[] = [
  {
    accessorKey: "profile",
    header: "Profile",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
