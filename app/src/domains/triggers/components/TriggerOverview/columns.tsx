import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { triggerSchema } from "../../schemas";

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
