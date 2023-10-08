import { ColumnDef } from "@tanstack/react-table";
import { BaseTrigger } from "../../schemas";

export const triggerColumns: ColumnDef<BaseTrigger>[] = [
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
