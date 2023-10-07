import { ColumnDef } from "@tanstack/react-table";
import { Trigger } from "../../schemas";

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
